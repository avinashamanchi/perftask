
// Bell Schedule Data
const bellSchedules = {
    "monday": `
        <table border="1">
            <tr><th>Period</th><th>Start Time</th><th>End Time</th><th>Length</th></tr>
            <tr><td>(Period 0)</td><td>7:15 AM</td><td>8:20 AM</td><td>65 min</td></tr>
            <tr><td>Period 1</td><td>8:30 AM</td><td>9:29 AM</td><td>59 min</td></tr>
            <tr><td>Period 2</td><td>9:35 AM</td><td>10:34 AM</td><td>59 min</td></tr>
            <tr><td>Period 3</td><td>10:40 AM</td><td>11:39 AM</td><td>59 min</td></tr>
            <tr><td>Period 4</td><td>11:45 AM</td><td>12:44 PM</td><td>59 min</td></tr>
            <tr><td>LUNCH</td><td>12:44 PM</td><td>1:14 PM</td><td>30 min</td></tr>
            <tr><td>Period 5</td><td>1:20 PM</td><td>2:19 PM</td><td>59 min</td></tr>
            <tr><td>Period 6</td><td>2:25 PM</td><td>3:24 PM</td><td>59 min</td></tr>
            <tr><td>(Period 7)</td><td>3:30 PM</td><td>4:30 PM</td><td>60 min</td></tr>
        </table>`,
    "wednesday": `
        <table border="1">
            <tr><th>Period</th><th>Start Time</th><th>End Time</th><th>Length</th></tr>
            <tr><td>Collaboration (Staff Only)</td><td>8:00 AM</td><td>8:55 AM</td><td>55 min</td></tr>
            <tr><td>Period 1</td><td>9:00 AM</td><td>10:30 AM</td><td>90 min</td></tr>
            <tr><td>Period 3</td><td>10:36 AM</td><td>12:06 PM</td><td>90 min</td></tr>
            <tr><td>LUNCH</td><td>12:06 PM</td><td>12:36 PM</td><td>30 min</td></tr>
            <tr><td>ACCESS Period</td><td>12:42 PM</td><td>1:37 PM</td><td>55 min</td></tr>
            <tr><td>Period 5</td><td>1:43 PM</td><td>3:13 PM</td><td>90 min</td></tr>
        </table>`,
    "thursday": `
        <table border="1">
            <tr><th>Period</th><th>Start Time</th><th>End Time</th><th>Length</th></tr>
            <tr><td>(Period 0)</td><td>7:15 AM</td><td>8:20 AM</td><td>65 min</td></tr>
            <tr><td>Period 2</td><td>8:30 AM</td><td>10:00 AM</td><td>90 min</td></tr>
            <tr><td>Period 4</td><td>10:06 AM</td><td>11:36 AM</td><td>90 min</td></tr>
            <tr><td>LUNCH</td><td>11:36 AM</td><td>12:06 PM</td><td>30 min</td></tr>
            <tr><td>ACCESS Period</td><td>12:12 PM</td><td>12:57 PM</td><td>45 min</td></tr>
            <tr><td>Period 6</td><td>1:03 PM</td><td>2:33 PM</td><td>90 min</td></tr>
            <tr><td>(Period 7)</td><td>2:39 PM</td><td>3:50 PM</td><td>71 min</td></tr>
        </table>`,
        "tuesday": `
        <table border="1">
            <tr><th>Period</th><th>Start Time</th><th>End Time</th><th>Length</th></tr>
            <tr><td>(Period 0)</td><td>7:15 AM</td><td>8:20 AM</td><td>65 min</td></tr>
            <tr><td>Period 1</td><td>8:30 AM</td><td>9:29 AM</td><td>59 min</td></tr>
            <tr><td>Period 2</td><td>9:35 AM</td><td>10:34 AM</td><td>59 min</td></tr>
            <tr><td>Period 3</td><td>10:40 AM</td><td>11:39 AM</td><td>59 min</td></tr>
            <tr><td>Period 4</td><td>11:45 AM</td><td>12:44 PM</td><td>59 min</td></tr>
            <tr><td>LUNCH</td><td>12:44 PM</td><td>1:14 PM</td><td>30 min</td></tr>
            <tr><td>Period 5</td><td>1:20 PM</td><td>2:19 PM</td><td>59 min</td></tr>
            <tr><td>Period 6</td><td>2:25 PM</td><td>3:24 PM</td><td>59 min</td></tr>
            <tr><td>(Period 7)</td><td>3:30 PM</td><td>4:30 PM</td><td>60 min</td></tr>
        </table>`,
    "friday": `
        <table border="1">
            <tr><th>Period</th><th>Start Time</th><th>End Time</th><th>Length</th></tr>
            <tr><td>Collaboration (Staff Only)</td><td>8:00 AM</td><td>8:55 AM</td><td>55 min</td></tr>
            <tr><td>Period 1</td><td>9:00 AM</td><td>10:30 AM</td><td>90 min</td></tr>
            <tr><td>Period 3</td><td>10:36 AM</td><td>12:06 PM</td><td>90 min</td></tr>
            <tr><td>LUNCH</td><td>12:06 PM</td><td>12:36 PM</td><td>30 min</td></tr>
            <tr><td>ACCESS Period</td><td>12:42 PM</td><td>1:37 PM</td><td>55 min</td></tr>
            <tr><td>Period 5</td><td>1:43 PM</td><td>3:13 PM</td><td>90 min</td></tr>
        </table>`,
};

// Track whether bot is waiting for a day selection
let waitingForDay = false;

// Function to send message
function sendMessage(userInput = null) {
    let inputField = document.getElementById("userInput");
    let chatbox = document.getElementById("chatbox");

    let message = userInput ? userInput : inputField.value.toLowerCase().trim();
    if (message === "") return;

    chatbox.innerHTML += `<p class="user-text"><strong>You:</strong> ${message}</p>`;

    if (waitingForDay) {
        if (bellSchedules[message]) {
            chatbox.innerHTML += `<p class="bot-text"><strong>Bot:</strong> Here is the schedule for ${message.charAt(0).toUpperCase() + message.slice(1)}:</p>`;
            chatbox.innerHTML += `<p class="bot-text">${bellSchedules[message]}</p>`;
        } else {
            chatbox.innerHTML += `<p class="bot-text"><strong>Bot:</strong> Please enter a valid day (Monday, Tuesday, Wednesday, Thursday, Friday).</p>`;
        }
        waitingForDay = false;
    } else if (message === "bell schedule") {
        chatbox.innerHTML += `<p class="bot-text"><strong>Bot:</strong> Which day do you need the schedule for? (Monday, Tuesday, Wednesday, Thursday, Friday)</p>`;
        waitingForDay = true;
    } else {
        chatbox.innerHTML += `<p class="bot-text"><strong>Bot:</strong> Sorry, I don't have an answer for that yet.</p>`;
    }

    chatbox.scrollTop = chatbox.scrollHeight;
    inputField.value = "";
}

// Function for quick reply buttons
function handleQuickReply(message) {
    sendMessage(message.toLowerCase());
}

// Help Center
function openHelpCenter() {
    alert("Welcome to the Help Center! Visit the school website or contact admin for support.");
}

function toggleDetails(button) {
    const details = button.nextElementSibling;
    details.classList.toggle("hidden");
}

// Show or Hide Staff Directory
function showStaffDirectory() {
    const directory = document.getElementById("staff-directory");
    directory.classList.toggle("hidden");
}

// Toggle individual staff details
function toggleDetails(button) {
    const details = button.nextElementSibling;
    details.classList.toggle("hidden");
}

// Staff Search Function
function searchStaff() {
    let input = document.getElementById("staffSearch").value.toLowerCase();
    let staffItems = document.querySelectorAll("#staffList li");

    staffItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(input) || item.classList.contains("category-header")) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}


