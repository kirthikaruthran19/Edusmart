import "./ParentExamResults.css";

import ParentSidebar from "../../components/ParentSidebar/ParentSidebar";
import ParentHeader from "../../components/ParentHeader/ParentHeader";
import ParentMarksTable from "../../components/ParentMarksTable/ParentMarksTable";

import { parentExamResultsData } from "../../data/parentExamResultsData";

function ParentExamResults() {
    return (
        <div className="parent-results-layout">
            <ParentSidebar />

            <main className="parent-results-main">
                <ParentHeader
                    title="Exam Results"
                    subtitle="Review subject-wise marks and academic performance"
                />
                <div className="parent-results-content">
                    <div className="results-page-header">
                        <h2>Exam Results</h2>

                        <p>
                            Review subject-wise marks, grades,
                            and overall academic performance.
                        </p>
                    </div>

                    <ParentMarksTable
                        results={parentExamResultsData}
                    />
                </div>
            </main>
        </div>
    );
}

export default ParentExamResults;