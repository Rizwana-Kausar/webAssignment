const textArea = document.getElementById('myInput');
const wordDisplay = document.getElementById('wordCount');
const charDisplay = document.getElementById('charCount');

textArea.addEventListener('input', function() {
    // 1. Characters ginn'na (Length)
    let text = textArea.value;
    charDisplay.innerHTML = text.length;

    // 2. Words ginn'na
    // Text ko spaces se split karke array banayenge
    let words = text.trim().split(/\s+/);
    
    // Agar text khali hai to 0 dikhao, warna words count
    wordDisplay.innerHTML = text.trim() === "" ? 0 : words.length;
});