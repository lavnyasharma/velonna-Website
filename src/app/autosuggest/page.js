"use client"
import { useState } from "react";

const suggestions = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
];

export default function AutoSuggestPage() {
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredSuggestions([]);
    } else {
      setFilteredSuggestions(
        suggestions.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Auto-Suggest Page</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Start typing..."
          style={styles.input}
        />
        {filteredSuggestions.length > 0 && (
          <ul style={styles.suggestionsList}>
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                style={styles.suggestionItem}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    padding: "20px",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  inputContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "400px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    outline: "none",
  },
  suggestionsList: {
    listStyleType: "none",
    margin: 0,
    padding: 0,
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },
  suggestionItem: {
    padding: "10px",
    cursor: "pointer",
    borderBottom: "1px solid #eee",
  },
  suggestionItemHover: {
    backgroundColor: "#f0f0f0",
  },
};
