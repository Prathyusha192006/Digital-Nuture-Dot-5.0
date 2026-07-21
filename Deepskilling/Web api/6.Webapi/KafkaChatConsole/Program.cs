using System;
using System.Threading;
using System.Threading.Tasks;
using Confluent.Kafka;

namespace KafkaChatConsole
{
    class Program
    {
        static async Task Main(string[] args)
        {
            Console.WriteLine("=== Kafka Chat Console Application ===");
            Console.Write("Enter your username: ");
            string username = Console.ReadLine();

            string bootstrapServers = "localhost:9092";
            string topic = "chat-room";

            var cts = new CancellationTokenSource();
            Console.CancelKeyPress += (_, e) => {
                e.Cancel = true;
                cts.Cancel();
            };

            // Start Consumer in a background task
            var consumerTask = Task.Run(() => StartConsumer(bootstrapServers, topic, cts.Token));

            // Setup Producer
            var config = new ProducerConfig { BootstrapServers = bootstrapServers };
            using (var producer = new ProducerBuilder<Null, string>(config).Build())
            {
                Console.WriteLine("Type a message and press Enter to send (or Ctrl+C to exit)...");
                while (!cts.Token.IsCancellationRequested)
                {
                    string message = Console.ReadLine();
                    if (string.IsNullOrWhiteSpace(message)) continue;

                    string formattedMessage = $"[{username}]: {message}";
                    try
                    {
                        var result = await producer.ProduceAsync(topic, new Message<Null, string> { Value = formattedMessage });
                    }
                    catch (ProduceException<Null, string> e)
                    {
                        Console.WriteLine($"Delivery failed: {e.Error.Reason}");
                    }
                }
            }

            await consumerTask;
        }

        static void StartConsumer(string bootstrapServers, string topic, CancellationToken cancellationToken)
        {
            var conf = new ConsumerConfig
            {
                GroupId = "chat-console-group-" + Guid.NewGuid().ToString(),
                BootstrapServers = bootstrapServers,
                AutoOffsetReset = AutoOffsetReset.Latest
            };

            using (var consumer = new ConsumerBuilder<Ignore, string>(conf).Build())
            {
                consumer.Subscribe(topic);
                try
                {
                    while (!cancellationToken.IsCancellationRequested)
                    {
                        var consumeResult = consumer.Consume(cancellationToken);
                        
                        // Clear the current line if the user is typing, print message, then restore prompt
                        // A simplistic approach for console is just printing:
                        Console.WriteLine($"\n>> {consumeResult.Message.Value}");
                    }
                }
                catch (OperationCanceledException)
                {
                    // Clean shutdown
                    consumer.Close();
                }
            }
        }
    }
}
