import { useState } from "react";
import "./Fees.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";

import {
    BookOpen,
    Wallet,
    ClipboardList,
    CheckCircle2,
    IndianRupee,
    House,
    Upload,
    Menu,
} from "lucide-react";

import FeeStructure from "./FeeStructure";
import Payments from "./Payments";
import PendingDues from "./PendingDues";

const Fees = () => {
    const [activeTab, setActiveTab] = useState("structure");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState("all");


    return (
        <div className="fees-layout">
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />

            <div className="fees-main">
                <Header />

                <div className="fees-content-wrapper">
                    <button
                        className="hamburger-btn"
                        onClick={() => setIsOpen(true)}
                    >
                        <Menu size={24} />
                    </button>

                    <div className="fees-page">
                        {/* Header */}

                        <div className="fees-header">
                            <div>
                                <h1>Fee Management</h1>
                                <p>
                                    Track fees structure, payments and pending.
                                </p>
                            </div>

                            <button className="export-btn">
                                <Upload size={18} />
                                Export Excel
                            </button>
                        </div>

                        {/* Stats */}

                        <div className="fees-stats">
                            <div className="stat-box collected">
                                <div className="stat-icon green">
                                    <CheckCircle2 size={24} />
                                </div>

                                <div>
                                    <h2>₹25,200</h2>
                                    <p>Total collected</p>
                                </div>
                            </div>

                            <div className="stat-box pending">
                                <div className="stat-icon yellow">
                                    <IndianRupee size={24} />
                                </div>

                                <div>
                                    <h2>₹11,800</h2>
                                    <p>Pending/Partial</p>
                                </div>
                            </div>

                            <div className="stat-box overdue">
                                <div className="stat-icon red">
                                    <House size={24} />
                                </div>

                                <div>
                                    <h2>₹6,600</h2>
                                    <p>Total Overdue</p>
                                </div>
                            </div>
                        </div>

                        {/* Tabs */}

                        <div className="fees-tabs">
                            <button
                                className={
                                    activeTab === "structure"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveTab("structure")
                                }
                            >
                                <BookOpen size={20} />
                                Fee Structure
                            </button>

                            <button
                                className={
                                    activeTab === "payments"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveTab("payments")
                                }
                            >
                                <Wallet size={20} />
                                Payments
                            </button>

                            <button
                                className={
                                    activeTab === "dues"
                                        ? "active"
                                        : ""
                                }
                                onClick={() =>
                                    setActiveTab("dues")
                                }
                            >
                                <ClipboardList size={20} />
                                Pending Dues
                            </button>
                        </div>

                        {/* Content */}

                        <div className="fees-content">
                            {activeTab === "structure" && (
                                <FeeStructure />
                            )}

                            {activeTab === "payments" && (
                                <Payments />
                            )}

                            {activeTab === "dues" && (
                                <PendingDues />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fees;