import "./Payments.css";
import { paymentRecords } from "../../data/feesData";
import { Search, CalendarDays } from "lucide-react";

const Payments = () => {
    return (
        <div className="payments-page">

            <div className="payments-filters">
                <div className="search-box">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Search Student or roll no......"
                    />
                </div>

                <div className="month-dropdown">
                    <CalendarDays size={18} />

                    <select>
                        <option value="all">All Months</option>
                        <option value="january">January</option>
                        <option value="february">February</option>
                        <option value="march">March</option>
                        <option value="april">April</option>
                        <option value="may">May</option>
                        <option value="june">June</option>
                        <option value="july">July</option>
                        <option value="august">August</option>
                        <option value="september">September</option>
                        <option value="october">October</option>
                        <option value="november">November</option>
                        <option value="december">December</option>
                    </select>
                </div>
            </div>
            <div className="table-wrapper">
                <div className="payments-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Student</th>
                                <th>Grade & Section</th>
                                <th>Fee Type</th>
                                <th>Receipt No.</th>
                                <th>Amount</th>
                                <th>Paid Date</th>
                                <th>Status</th>
                                <th>Method</th>
                            </tr>
                        </thead>

                        <tbody>
                            {paymentRecords.map((student) => (
                                <tr key={student.id}>
                                    <td>
                                        <div className="student-cell">
                                            <img
                                                src={student.avatar}
                                                alt={student.name}
                                            />

                                            <div>
                                                <h4>{student.name}</h4>
                                                <span>{student.studentId}</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>{student.grade}</td>
                                    <td>{student.feeType}</td>
                                    <td>{student.receiptNo}</td>
                                    <td>${student.amount}</td>
                                    <td>{student.paidDate}</td>

                                    <td>
                                        <span
                                            className={`status ${student.status.toLowerCase()}`}
                                        >
                                            {student.status}
                                        </span>
                                    </td>

                                    <td>{student.method}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Payments;