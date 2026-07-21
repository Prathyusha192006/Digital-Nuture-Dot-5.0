import React, { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [showBook, setShowBook] = useState(true);
  const [showBlog, setShowBlog] = useState(true);
  const [showCourse, setShowCourse] = useState(true);
  const [activeTab, setActiveTab] = useState('none');

  // 1. If/Else Statement pattern
  const renderBookDetails = () => {
    if (showBook) {
      return <BookDetails />;
    } else {
      return <p style={{ fontStyle: 'italic' }}>Book details are hidden (If/Else statement).</p>;
    }
  };

  // 4. Element Variable pattern
  let tabContent;
  switch (activeTab) {
    case 'book':
      tabContent = <BookDetails />;
      break;
    case 'blog':
      tabContent = <BlogDetails />;
      break;
    case 'course':
      tabContent = <CourseDetails />;
      break;
    default:
      tabContent = <p>Select a tab to view content (Element Variable & Switch).</p>;
  }

  return (
    <div className="App" style={{ margin: '30px', fontFamily: 'sans-serif' }}>
      <h1>Blogger App - Conditional Rendering Examples</h1>
      <hr />

      <section style={{ marginBottom: '30px' }}>
        <h2>Toggle Views</h2>
        <button onClick={() => setShowBook(!showBook)} style={{ marginRight: '10px' }}>Toggle Book</button>
        <button onClick={() => setShowBlog(!showBlog)} style={{ marginRight: '10px' }}>Toggle Blog</button>
        <button onClick={() => setShowCourse(!showCourse)}>Toggle Course</button>
      </section>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h2>Method 1: If/Else</h2>
          {renderBookDetails()}
        </div>

        <div style={{ flex: 1 }}>
          <h2>Method 2: Ternary Operator</h2>
          {showBlog ? <BlogDetails /> : <p style={{ fontStyle: 'italic' }}>Blog details are hidden (Ternary Operator).</p>}
        </div>

        <div style={{ flex: 1 }}>
          <h2>Method 3: Logical &&</h2>
          {showCourse && <CourseDetails />}
          {!showCourse && <p style={{ fontStyle: 'italic' }}>Course details are hidden (Logical &&).</p>}
        </div>
      </div>

      <hr style={{ margin: '30px 0' }} />

      <section>
        <h2>Method 4: Element Variables (with Switch)</h2>
        <div style={{ marginBottom: '15px' }}>
          <button onClick={() => setActiveTab('book')} style={{ marginRight: '10px' }}>Show Book</button>
          <button onClick={() => setActiveTab('blog')} style={{ marginRight: '10px' }}>Show Blog</button>
          <button onClick={() => setActiveTab('course')}>Show Course</button>
        </div>
        <div style={{ padding: '15px', backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '5px' }}>
          {tabContent}
        </div>
      </section>

    </div>
  );
}

export default App;
