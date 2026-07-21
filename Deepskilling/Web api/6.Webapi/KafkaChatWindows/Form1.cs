using System;
using System.Drawing;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using Confluent.Kafka;

namespace KafkaChatWindows
{
    public class Form1 : Form
    {
        private ListBox lstChat;
        private TextBox txtMessage;
        private Button btnSend;
        private TextBox txtUsername;
        
        private string bootstrapServers = "localhost:9092";
        private string topic = "chat-room";
        private CancellationTokenSource cts;
        private IProducer<Null, string> producer;

        public Form1()
        {
            InitializeComponent();
            SetupKafka();
        }

        private void InitializeComponent()
        {
            this.Text = "Kafka Chat - Windows Form";
            this.Size = new Size(500, 450);

            var lblUser = new Label { Text = "Username:", Location = new Point(10, 15), AutoSize = true };
            txtUsername = new TextBox { Location = new Point(80, 12), Width = 150, Text = "User" + new Random().Next(100, 999) };
            
            lstChat = new ListBox { Location = new Point(10, 40), Size = new Size(460, 300) };
            
            txtMessage = new TextBox { Location = new Point(10, 350), Width = 370 };
            
            btnSend = new Button { Text = "Send", Location = new Point(390, 348), Width = 80 };
            btnSend.Click += BtnSend_Click;
            
            this.Controls.Add(lblUser);
            this.Controls.Add(txtUsername);
            this.Controls.Add(lstChat);
            this.Controls.Add(txtMessage);
            this.Controls.Add(btnSend);
            
            this.FormClosing += Form1_FormClosing;
        }

        private void SetupKafka()
        {
            cts = new CancellationTokenSource();
            
            // Start Producer
            var config = new ProducerConfig { BootstrapServers = bootstrapServers };
            producer = new ProducerBuilder<Null, string>(config).Build();

            // Start Consumer
            Task.Run(() => StartConsumer(cts.Token));
        }

        private void StartConsumer(CancellationToken token)
        {
            var conf = new ConsumerConfig
            {
                GroupId = "chat-win-group-" + Guid.NewGuid().ToString(),
                BootstrapServers = bootstrapServers,
                AutoOffsetReset = AutoOffsetReset.Latest
            };

            using (var consumer = new ConsumerBuilder<Ignore, string>(conf).Build())
            {
                consumer.Subscribe(topic);
                try
                {
                    while (!token.IsCancellationRequested)
                    {
                        var cr = consumer.Consume(token);
                        
                        // Update UI
                        if (lstChat.InvokeRequired)
                        {
                            lstChat.Invoke(new Action(() => lstChat.Items.Add(cr.Message.Value)));
                        }
                        else
                        {
                            lstChat.Items.Add(cr.Message.Value);
                        }
                    }
                }
                catch (OperationCanceledException)
                {
                    consumer.Close();
                }
            }
        }

        private async void BtnSend_Click(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(txtMessage.Text)) return;

            string formattedMessage = $"[{txtUsername.Text}]: {txtMessage.Text}";
            txtMessage.Clear();

            try
            {
                await producer.ProduceAsync(topic, new Message<Null, string> { Value = formattedMessage });
            }
            catch (Exception ex)
            {
                MessageBox.Show("Failed to send: " + ex.Message);
            }
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            cts?.Cancel();
            producer?.Dispose();
        }
    }
}
