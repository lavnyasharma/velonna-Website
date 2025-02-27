import { marked } from "marked";

const convertMarkdownToHtml = (markdown) => {
    // Split sections based on "## "
    const sections = markdown.split("\n\n## ");
  
    const processedSections = sections.map((section, index) => {
      if (index === 0) return null; // Skip the first section (it's not prefixed by "##")
  
      const lines = section.split("\n");
      
      // First line contains the title (like "Story", "Description", etc.)
      const sectionTitle = lines.shift().replace(/^##\s*(.*)/, "$1").trim();
  
      // Join the remaining lines into content
      let content = lines.join("\n").trim();
  
      // If the content includes bullet points (starts with "- " or "**"), handle them
      let htmlContent = content;
  
      // Check if content contains bullet points (identified by "- " or "**")
      if (htmlContent.includes("- ") || htmlContent.includes("**")) {
        htmlContent = htmlContent
          .split("\n")
          .map((line) => {
            if (line.startsWith("- ") || line.startsWith("**")) {
              // Escape special characters for safe HTML rendering
              line = line.replace(/</g, "&lt;").replace(/>/g, "&gt;");
              return `<li>${line.replace(/^\*{2}|\*$/, "").trim()}</li>`; // Handle "**" bullet points
            }
            return `<p>${line.trim()}</p>`; // Regular paragraphs
          })
          .join("");
        htmlContent = `<ul class="list-disc pl-5">${htmlContent}</ul>`;
      } else {
        htmlContent = `<p>${htmlContent}</p>`; // Wrap in <p> tags if no lists
      }
      return {
        name: sectionTitle,
        content: `${marked(content)}` // Only the content, not the redundant title again
      };
    }).filter(Boolean); // Filter out any null values from skipped sections
  
    return processedSections;
  };
  
export default convertMarkdownToHtml