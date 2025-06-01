 const mailContainer = document.getElementById('mailContainer');

       
        const mockEmails = [
            {
                id: 1,
                sender: "Leslie Alexander",
                subject: "Hiya",
                preview: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                time: "10:41 PM",
                isUnread: true,
                isStarred: false,
                labels: []
            },
            {
                id: 2,
                sender: "Theresa Webb",
                subject: "Build prototypes without code",
                preview: "Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor...",
                time: "12:01 PM",
                isUnread: true,
                isStarred: true,
                labels: ["Promotions"]
            },
             {
                id:6 ,
                sender: "Leslie Alexander",
                subject: "Hiya",
                preview: "Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
                time: "10:41 PM",
                isUnread: true,
                isStarred: false,
                labels: []
            },
            {
                id: 7,
                sender: "Theresa Webb",
                subject: "Build prototypes without code",
                preview: "Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor...",
                time: "12:01 PM",
                isUnread: true,
                isStarred: true,
                labels: ["Promotions"]
            },
            {
                id: 3,
                sender: "Albert Flores",
                subject: "Build prototypes without code",
                preview: "Nostrud irure in duis ea quis et qui ut amet. Sint qui esse pariatur duis deserunt mollit dolore...",
                time: "11:59 AM",
                isUnread: false,
                isStarred: false,
                labels: ["Updates"]
            },
            {
                id: 4,
                sender: "Jacob Jones",
                subject: "Don't make this bad",
                preview: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
                time: "10:30 AM",
                isUnread: false,
                isStarred: false,
                labels: []
            },
            {
                id: 5,
                sender: "Guy Hawkins",
                subject: "The results to our latest testing",
                preview: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor...",
                time: "5:49 AM",
                isUnread: false,
                isStarred: true,
                labels: ["Updates"]
            },
           
            {
                id: 8,
                sender: "Albert Flores",
                subject: "Build prototypes without code",
                preview: "Nostrud irure in duis ea quis et qui ut amet. Sint qui esse pariatur duis deserunt mollit dolore...",
                time: "11:59 AM",
                isUnread: false,
                isStarred: false,
                labels: []
            },
            {
                id: 9,
                sender: "Jacob Jones",
                subject: "Don't make this bad",
                preview: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint...",
                time: "10:30 AM",
                isUnread: false,
                isStarred: true,
                labels: ["Updates"]
            },
            {
                id: 10,
                sender: "Guy Hawkins",
                subject: "The results to our latest testing",
                preview: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor...",
                time: "5:49 AM",
                isUnread: false,
                isStarred: true,
                labels: ["Promotions"]
            },
             {
                id: 8,
                sender: "Albert Flores",
                subject: "Build prototypes without code",
                preview: "Nostrud irure in duis ea quis et qui ut amet. Sint qui esse pariatur duis deserunt mollit dolore...",
                time: "11:59 AM",
                isUnread: false,
                isStarred: false,
                labels: []
            },
        ];

        function createEmailElement(email) {
            const emailDiv = document.createElement('div');
            emailDiv.className = `email-item ${email.isUnread ? 'unread' : ''}`;
            
            let labelsHtml = '';
            if (email.labels && email.labels.length > 0) {
                labelsHtml = '<div class="email-labels">';
                labelsHtml += email.labels.map(label => `<span class="label ${label}">${label}</span>`);
                labelsHtml += '</div>';
            }
            
            emailDiv.innerHTML = `
                <input type="checkbox" class="email-checkbox">
                <span class="email-star">star</span>
                <span class="email-label">label_important</span>
                
                <div class="email-sender">${email.sender}</div>
                ${labelsHtml}
                <div class="email-subject">
                    ${email.subject}
                    <span class="email-preview"> - ${email.preview}</span>
                </div>
                
                <div class="email-time">${email.time}</div>
                <div class="email-tools"><span class="email-archive">archive</span>
                <span class="email-delete">delete</span>
                <span class="email-mail">mail</span>
                <span class="email-snooze">snooze</span></div>
                
            `;
            
 
            emailDiv.addEventListener('click', (e) => {
                if (!e.target.matches('input, button, .email-star,.email-archive, .email-delete, .email-mail, .email-snooze')) {                    displayEmails(email);
                }
            });
            
            return emailDiv;
        }

        function displayEmails(emails) {
            if (!emails || emails.length === 0) {
                mailContainer.innerHTML = `
                    <div class="empty-state">
                        
                        <div>No emails found</div>
                    </div>
                `;
                return;
            }

            mailContainer.innerHTML = '';
            emails.forEach(email => {
                const emailElement = createEmailElement(email);
                mailContainer.appendChild(emailElement);
            });
        }
        async function fetchMails() {
            try {
                mailContainer.innerHTML = '<div class="loading">Loading emails...</div>';

                
                
            } 
            catch (error) {
                console.error('Error fetching mails:', error);
                mailContainer.innerHTML = `
                    <div class="error">
                        <div>Error fetching emails: ${error.message}</div>
                        
                    </div>
                `;
            }
        }

      
        setTimeout(() => {
            displayEmails(mockEmails);
        }, 1000);

     
