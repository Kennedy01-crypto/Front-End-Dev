import React from "react";

export const FeedbackDisplay = ({ feedbacks }) => {
  return (
    <div>
      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800  mb-4 text-center">
          Submitted Feedback
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {feedbacks.length > 0 ? (
            feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="bg-white shadow-md w-64 flex-wrap rounded-lg p-4 border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-800">
                  {feedback.name}
                </h3>
                <p className="text-sm text-gray-600">
                  <strong>Rating:</strong> {feedback.rating}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Comments:</strong> {feedback.comments}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-600">No feedback submitted yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};
