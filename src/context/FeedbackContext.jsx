import { createContext, useState, useEffect } from 'react';
import FeedbackData from '../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    // Creates context for all the feedback data and methods. The original dummy set of data is loaded in the from
    // FeedbackData.js and is reloaded every time the page is loaded. Creating a backend for this project was a little beyond my
    // skill level at the time. This project was more to learn about hooks and organizing code rather than any backend stuff.
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    useEffect(() => {
        setFeedback(FeedbackData);
    }, []);

    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = feedback.length + 1;
        setFeedback([newFeedback, ...feedback]);
    };

    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(
            feedback.map((item) =>
                item.id === id ? { ...item, ...updItem } : item
            )
        );
    };

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                deleteFeedback,
                addFeedback,
                editFeedback,
                feedbackEdit,
                updateFeedback,
                isLoading,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
