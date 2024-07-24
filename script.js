function runCode() {
    const code = document.getElementById('code-area').value;
    const output = document.getElementById('output');
    output.textContent = '';
    try {
        const oldLog = console.log;
        console.log = function(...args) {
            output.textContent += args.join(' ') + '\n';
            oldLog.apply(console, args);
        };
        eval(code);
        console.log = oldLog;
    } catch (error) {
        output.textContent = 'Error: ' + error.message;
    }

}
function redirectToLink() {
    window.location.href = 'https://github.com/DarkRai087/Onlinejs'; 
}

function clearCode() {
    document.getElementById('code-area').value = '';
    document.getElementById('output').textContent = '';
}

function copyCode() {
    const codeArea = document.getElementById('code-area');
    codeArea.select();
    codeArea.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
}