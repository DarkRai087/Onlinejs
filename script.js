
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
            window.location.href = 'https://github.com/DarkRai087'; 
        }
 ssjdfhkshdfoierbv skdfsvsk 