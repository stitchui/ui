import { useState } from 'react';
import Toggle from './components/Toggle';
import './App.css';

function App() {
  const [billingCycle, setBillingCycle] = useState<'left' | 'right'>('right');

  return (
    <div className="app-container">
      <div className="app-content">
        <div className="app-header">
          <h1 className="app-title">Custom Toggle Component</h1>
          <p className="app-subtitle">A beautiful toggle switch with embedded text</p>
        </div>

        <div className="app-card">
          <div className="toggle-section">
            <h2 className="section-title">Choose Your Billing Cycle</h2>

            <Toggle
              leftLabel="Monthly"
              rightLabel="Annually"
              defaultValue="right"
              onChange={(value) => setBillingCycle(value)}
            />

            <div className="selected-value">
              <p className="selected-text">
                Selected: <span className="selected-highlight">
                  {billingCycle === 'left' ? 'Monthly' : 'Annually'}
                </span>
              </p>
            </div>
          </div>

          <div className="examples-section">
            <h3 className="examples-title">Size Variants</h3>

            <div className="examples-list">
              <div className="example-row">
                <span className="example-label">Small</span>
                <Toggle leftLabel="Monthly" rightLabel="Annually" defaultValue="left" size="small" />
              </div>

              <div className="example-row">
                <span className="example-label">Medium (Default)</span>
                <Toggle leftLabel="Monthly" rightLabel="Annually" defaultValue="left" size="medium" />
              </div>

              <div className="example-row">
                <span className="example-label">Large</span>
                <Toggle leftLabel="Monthly" rightLabel="Annually" defaultValue="left" size="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
