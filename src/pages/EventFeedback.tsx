import { useRef } from "react";

function EventFeedback() {
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const feedbackRef = useRef<HTMLInputElement>(null);

    const handleEventFeedback = (e: any) => {
        e.preventDefault();
        if (nameRef.current && emailRef.current && feedbackRef.current) {
            const data = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                feedback: feedbackRef.current.value
            };
            console.log("Event Feedback.", data);
            alert("Check the console for submitted data");
            
        }
    };

    return (
        <div className="container mt-4">
            <h3 className="mb-4">Event Feedback Form (Uncontrolled)</h3>
            
            <form onSubmit={handleEventFeedback} className="mb-5">
                <div className="mb-2">
                    <input 
                        type="text" 
                        className="form-control" 
                        ref={nameRef} 
                        placeholder="Name" 
                    />
                </div>

                <div className="mb-2">
                    <input 
                        type="email" 
                        className="form-control" 
                        ref={emailRef} 
                        placeholder="Email" 
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="text" 
                        className="form-control" 
                        ref={feedbackRef} 
                        placeholder="Feedback" 
                    />
                </div>

                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Submit Feedback
                </button>
            </form>
            <hr />
        </div>
    );
}

export default EventFeedback;
