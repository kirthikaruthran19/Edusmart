import "./Integration.css";

import { CreditCard, Eye, Check } from "lucide-react";

const Integration = () => {
  return (
    <div className="integration-page">

      <div className="integration-header">
        <h2>Payment Integrations</h2>
        <p>Connect external payment gateways</p>
      </div>

      <div className="integration-grid">

        {/* Stripe */}

        <div className="integration-card">
          <div className="integration-top">

            <div className="integration-info">
              <div className="integration-icon">
                <CreditCard size={24} />
              </div>

              <div>
                <h3>Stripe</h3>
                <p>Accept online fee payments via cards</p>
              </div>
            </div>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>

          </div>

          <hr />

          <div className="form-group">
            <label>Secret Key</label>

            <div className="input-wrapper">
              <input
                type="password"
                value=""
                readOnly
              />
              <Eye size={20} />
            </div>
          </div>

          <div className="form-group">
            <label>WebHook Secret</label>

            <div className="input-wrapper">
              <input
                type="password"
                value=""
                readOnly
              />
              <Eye size={20} />
            </div>
          </div>

          <button className="save-btn">
            <Check size={18} />
            Save
          </button>
        </div>

        {/* Razorpay */}

        <div className="integration-card">
          <div className="integration-top">

            <div className="integration-info">
              <div className="integration-icon">
                <CreditCard size={24} />
              </div>

              <div>
                <h3>Razorpay</h3>
                <p>Indian payment gateway for fees collect</p>
              </div>
            </div>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>

          </div>

          <hr />

          <div className="form-group">
            <label>Key ID</label>

            <div className="input-wrapper">
              <input
                type="text"
                value=""
                readOnly
              />
              <Eye size={20} />
            </div>
          </div>

          <div className="form-group">
            <label>Key Secret</label>

            <div className="input-wrapper">
              <input
                type="password"
                value=""
                readOnly
              />
              <Eye size={20} />
            </div>
          </div>

          <button className="save-btn">
            <Check size={18} />
            Save
          </button>
        </div>

      </div>
    </div>
  );
};

export default Integration;