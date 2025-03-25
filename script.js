// Predefined chatbot responses
const responses = {
    "bell schedule": "The bell schedule is available on the EHS website. School starts at 8:30 AM and ends at 3:30 PM.",
    "school events": "Upcoming events: Spirit Week, Homecoming Dance, and Parent-Teacher Conference!",
    "clubs & activities": "EHS offers a variety of clubs like Robotics, Drama, and Chess Club. Check the school's website for more details.",
    "staff directory": "Click the 'Staff Directory' button to search for staff members.",
};

// Function to send user message to the chatbot
function sendMessage() {
    let userInput = document.getElementById("userInput").value.toLowerCase().trim();
    let chatbox = document.getElementById("chatbox");

    if (userInput === "") return; // Prevent empty messages

    // Append user message to chatbox
    chatbox.innerHTML += `<p class="user-text"><strong>You:</strong> ${userInput}</p>`;

    // Check if response exists
    let botResponse = responses[userInput] || "Sorry, I don't have an answer for that yet.";
    
    // Append bot response
    setTimeout(() => {
        chatbox.innerHTML += `<p class="bot-text"><strong>Bot:</strong> ${botResponse}</p>`;
        chatbox.scrollTop = chatbox.scrollHeight; // Auto-scroll to latest message
    }, 500);

    document.getElementById("userInput").value = ""; // Clear input field
}

// Function for quick reply buttons
function handleQuickReply(question) {
    document.getElementById("userInput").value = question;
    sendMessage();
}

// STAFF DIRECTORY DATA (Example)
const staff = [
    { name: "Lenni Velez", position: "Principal" },
    { name: "Chiharu Kitchens", position: "Assistant Principal" },
    { name: "Dianna Heise", position: "Head Counselor" },
    { name: "Pallavi Nandakishore", position: "Counselor" },
    { name: "Miguel Baez", position: "Computer Science Teacher" },
    { name: "Rebecca Lee", position: "Math Teacher" },
];

// Function to show staff directory
function showStaffDirectory() {
    document.getElementById("staff-directory").classList.toggle("hidden");
    displayStaffList();
}

// Function to display staff list
function displayStaffList() {
    let staffList = document.getElementById("staffList");
    staffList.innerHTML = "";
    staff.forEach(person => {
        let li = document.createElement("li");
        li.textContent = `${person.name} - ${person.position}`;
        staffList.appendChild(li);
    });
}

// Function to search staff
function searchStaff() {
    let searchValue = document.getElementById("staffSearch").value.toLowerCase();
    let filteredStaff = staff.filter(person =>
        person.name.toLowerCase().includes(searchValue) || 
        person.position.toLowerCase().includes(searchValue)
    );

    let staffList = document.getElementById("staffList");
    staffList.innerHTML = "";
    filteredStaff.forEach(person => {
        let li = document.createElement("li");
        li.textContent = `${person.name} - ${person.position}`;
        staffList.appendChild(li);
    });
}
