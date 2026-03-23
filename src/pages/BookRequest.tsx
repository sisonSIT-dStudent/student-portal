import { useRef } from "react";

function BookRequest() {
    const nameRef = useRef<HTMLInputElement>(null);
    const idRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const authorRef = useRef<HTMLInputElement>(null);
    const reasonRef = useRef<HTMLInputElement>(null);

    const handleBookRequest = (e: any) => {
        e.preventDefault();
        
        
        const data = {
            studentName: nameRef.current?.value,
            studentID: idRef.current?.value,
            bookTitle: titleRef.current?.value,
            author: authorRef.current?.value,
            reason: reasonRef.current?.value
        };
        
        console.log("Book Request Submitted:", data);
        alert("Check the console for submitted data");
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-4">Book Request Form (Uncontrolled)</h3>
            
            <form onSubmit={handleBookRequest} className="mb-5">
                <div className="mb-2">
                    <input type="text" className="form-control" ref={nameRef} placeholder="Student Name" />
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" ref={idRef} placeholder="Student ID" />
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" ref={titleRef} placeholder="Book Title" />
                </div>
                <div className="mb-2">
                    <input type="text" className="form-control" ref={authorRef} placeholder="Author" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" ref={reasonRef} placeholder="Reason" />
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit Request
                </button>
            </form>
            <hr />
        </div>
    );
}

export default BookRequest;

