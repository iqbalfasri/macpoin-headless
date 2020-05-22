import React from "react"

function Pagination({ page, totalPage, handleNext, handleBack }) {
    return (
        <div style={{ textAlign: "center" }} className="row mb-5">
            <div className="col-md-4">
                <button
                    onClick={() => handleBack()}
                    disabled={page === 1}
                    className="pagination"
                >
                    Sebelumnya
                </button>
            </div>
            <div className="col-md-4">
                <span>
                    {page} / {totalPage === null ? 0 : totalPage}
                </span>
            </div>
            <div className="col-md-4">
                <button onClick={() => handleNext()} className="pagination">
                    Selanjutnya
                </button>
            </div>
        </div>
    )
}

export default Pagination
