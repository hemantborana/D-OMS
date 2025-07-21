function registerUser() {
    let usernameModal = new bootstrap.Modal(document.getElementById('usernameModal'), {
        backdrop: 'static',
        keyboard: false
    });
    usernameModal.show();

    document.getElementById('saveUsername').addEventListener('click', async function() {
        let inputUsername = document.getElementById('usernameInput').value.trim();
        if (!inputUsername) {
            alert('Please enter a valid username.');
            return;
        }

        try {
            const fingerprint = await generateDeviceFingerprint();
            const demoAccess = await checkDemoAccess(fingerprint);

            if (demoAccess === 'never_accessed') {
                // New device - start demo
                await startNewDemoSession(inputUsername, fingerprint);
                usernameModal.hide();
                showProjectInfo();
            } 
            else if (demoAccess === 'active') {
                // Resume existing demo
                const sessionData = await getDemoSession(fingerprint);
                startDemoTimer(sessionData.expires);
                document.getElementById('userNameDisplay').textContent = sessionData.username + ' (Demo)';
                showToast(`Welcome back! Demo session resumes with ${formatTime(sessionData.expires - Date.now())} remaining`);
                usernameModal.hide();
                showProjectInfo();
            }
            else {
                // Device has already used demo - show permanent expiry
                showPermanentExpiryMessage();
            }
        } catch (error) {
            console.error('Error in registration:', error);
            alert('An error occurred. Please try again later.');
        }
    });
}


function showPermanentExpiryMessage() {
    // Clear the entire page
    document.body.innerHTML = '';
    document.body.style.margin = '0';

    // Load Font Awesome
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const faLink = document.createElement('link');
        faLink.rel = 'stylesheet';
        faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
        document.head.appendChild(faLink);
    }

    // Overlay
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.95);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-y: auto;
        padding: 20px;
        box-sizing: border-box;
    `;

    // Content container
    const content = document.createElement('div');
    content.style.cssText = `
        width: 100%;
        max-width: 500px;
        background: rgba(255,255,255,0.05);
        border-radius: 15px;
        padding: 20px;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: white;
    `;

    // Profile image
    const profile = document.createElement('div');
    profile.innerHTML = `
   <div style="width:100px; height:100px; border-radius:50%; border:3px solid #4CAF50; overflow:hidden; display:flex; align-items:flex-start; justify-content:center; margin: 0 auto;">
  <img src="https://i.ibb.co/MxrwfrCZ/profilepic.jpg" 
       style="width:100px; height:100px; object-fit:cover; margin-top:0px;">
</div>

     <h2 style="margin:0;color:#4CAF50;font-size:24px;">Hemant Borana</h2>
        <p style="margin:5px 0 15px;color:#ccc;font-size:14px;">Aspiring Data Analyst | Project Admin</p>
    `;

    // Message
    const message = document.createElement('div');
    message.innerHTML = `
        <h3 style="font-size:20px;margin-bottom:10px;">Demo Access Completed</h3>
        <p style="font-size:14px;margin-bottom:10px;">Thank you for trying the demo. Each device can only access the demo once.</p>
        <p style="font-size:14px;">For full access or collaboration opportunities, please contact me:</p>
    `;

    // Contact Info
    const contactInfo = document.createElement('div');
    contactInfo.style.cssText = `
        background: rgba(255,255,255,0.1);
        padding: 15px;
        border-radius: 10px;
        margin: 15px 0;
        text-align: left;
        font-size: 14px;
    `;
    contactInfo.innerHTML = `
        <div style="margin-bottom: 10px; display: flex; align-items: center;">
            <i class="fas fa-phone flip-icon" style="margin-right:10px;color:#4CAF50;"></i> +91 9284494154
        </div>
        <div style="display: flex; align-items: center;">
            <i class="fas fa-envelope" style="margin-right:10px;color:#4CAF50;"></i> hemanthpb123@gmail.com
        </div>
    `;

    // Contact Button
    const contactBtn = document.createElement('button');
    contactBtn.innerHTML = 'Get in Touch <i class="fas fa-paper-plane" style="margin-left:8px;"></i>';
    contactBtn.style.cssText = `
        background: #4CAF50;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 25px;
        font-size: 14px;
        margin: 15px 0;
        cursor: pointer;
        transition: 0.3s;
    `;
    contactBtn.onmouseover = () => contactBtn.style.boxShadow = '0 5px 15px rgba(76, 175, 80, 0.4)';
    contactBtn.onmouseout = () => contactBtn.style.boxShadow = 'none';

    // Social Links
    const socialMedia = document.createElement('div');
    socialMedia.style.cssText = `
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: 15px;
    `;
    const links = [
        { icon: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/hemant-parasmal-borana-17a742289', color: '#0077B5' },
        { icon: 'fab fa-github', url: 'https://github.com/hb00112', color: '#333' },
        { icon: 'fab fa-facebook-f', url: 'https://www.facebook.com/share/16o96MwNcJ/', color: '#4267B2' },
        { icon: 'fab fa-instagram', url: 'https://www.instagram.com/hemant_borana_/', color: '#E1306C' },
    ];
    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.innerHTML = `<i class="${link.icon}"></i>`;
        a.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: ${link.color};
            color: white;
            font-size: 18px;
            transition: 0.3s;
            text-decoration: none;
        `;
        a.onmouseenter = () => a.style.transform = 'translateY(-3px)';
        a.onmouseleave = () => a.style.transform = 'none';
        socialMedia.appendChild(a);
    });

    // Append all
    content.appendChild(profile);
    content.appendChild(message);
    content.appendChild(contactInfo);
    content.appendChild(contactBtn);
    content.appendChild(socialMedia);

    overlay.appendChild(content);
    document.body.appendChild(overlay);
}


function showContactFormModal() {
    // Create modal backdrop
    const modalBackdrop = document.createElement('div');
    modalBackdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: #fff;
        border-radius: 10px;
        padding: 30px;
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        color: #333;
        position: relative;
    `;
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeBtn.style.cssText = `
        position: absolute;
        top: 15px;
        right: 15px;
        background: none;
        border: none;
        font-size: 20px;
        cursor: pointer;
        color: #666;
    `;
    closeBtn.onclick = () => modalBackdrop.remove();
    
    // Contact form HTML
    modalContent.innerHTML = `
        <h2 style="margin-bottom: 20px; color: #4CAF50;">Contact Me</h2>
        <form id="contactForm" style="margin-top: 20px;">
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Your Name</label>
                <input type="text" id="contactName" required 
                    style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Your Email</label>
                <input type="email" id="contactEmail" required 
                    style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
            </div>
            <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Subject</label>
                <input type="text" id="contactSubject" required 
                    style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;">
            </div>
            <div style="margin-bottom: 25px;">
                <label style="display: block; margin-bottom: 8px; font-weight: 500;">Your Message</label>
                <textarea id="contactMessage" rows="5" required 
                    style="width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px;"></textarea>
            </div>
            <button type="submit" 
                style="background: #4CAF50; color: white; border: none; padding: 12px 25px; 
                border-radius: 5px; font-size: 16px; font-weight: 600; cursor: pointer; 
                width: 100%; transition: background 0.3s;">
                Send Message <i class="fas fa-paper-plane ml-2"></i>
            </button>
        </form>
    `;
    
    modalContent.prepend(closeBtn);
    modalBackdrop.appendChild(modalContent);
    document.body.appendChild(modalBackdrop);
    
    // Initialize form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactFormSubmit();
        });
    }
    
    // Load EmailJS if not already loaded
    if (!window.emailjs) {
        const emailjsScript = document.createElement('script');
        emailjsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        emailjsScript.onload = function() {
            emailjs.init('MR87pdkp-Hr9AcuQ1'); // Your EmailJS public key
        };
        document.head.appendChild(emailjsScript);
    } else {
        emailjs.init('MR87pdkp-Hr9AcuQ1');
    }
}

function handleContactFormSubmit() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin ml-2"></i>';
    
    // Prepare email parameters
    const templateParams = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value,
        source: 'GitHub OMS Project',
        to_name: 'Hemant Borana'
    };
    
    // Send email
    emailjs.send('service_cky6mhg', 'template_j2p0d7h', templateParams)
        .then(function(response) {
            // Success
            submitBtn.innerHTML = 'Message Sent! <i class="fas fa-check ml-2"></i>';
            submitBtn.style.background = '#4CAF50';
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane ml-2"></i>';
                submitBtn.style.background = '#4CAF50';
                
                // Close modal after successful submission
                document.querySelector('div[style*="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.8);"]')?.remove();
            }, 2000);
        }, function(error) {
            // Error
            submitBtn.innerHTML = 'Failed to Send <i class="fas fa-exclamation-triangle ml-2"></i>';
            submitBtn.style.background = '#f44336';
            
            // Reset button after delay
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Try Again <i class="fas fa-paper-plane ml-2"></i>';
                submitBtn.style.background = '#4CAF50';
            }, 2000);
        });
}


function formatTime(ms) {
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${seconds}s`;
}



// Generate a device fingerprint
async function generateDeviceFingerprint() {
    const fingerprintComponents = [
        navigator.userAgent,
        navigator.hardwareConcurrency,
        navigator.deviceMemory || 'unknown',
        screen.width,
        screen.height,
        screen.colorDepth,
        new Date().getTimezoneOffset(),
        navigator.language,
        navigator.platform,
        navigator.product,
        navigator.vendor,
        !!navigator.cookieEnabled,
        navigator.maxTouchPoints || 'unknown',
        performance.memory ? performance.memory.jsHeapSizeLimit : 'unknown',
        (await getCanvasFingerprint()) || 'unknown'
    ].join('|');
    
    return await hashString(fingerprintComponents);
}

// Canvas fingerprinting for additional uniqueness
async function getCanvasFingerprint() {
    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillStyle = '#f60';
        ctx.fillRect(125, 1, 62, 20);
        ctx.fillStyle = '#069';
        ctx.fillText('CanvasFingerprint', 2, 15);
        return canvas.toDataURL();
    } catch (e) {
        return null;
    }
}


// Simple string hashing function
function hashString(str) {
    return new Promise(resolve => {
        // Use SubtleCrypto if available (more secure)
        if (window.crypto && window.crypto.subtle) {
            const encoder = new TextEncoder();
            const data = encoder.encode(str);
            window.crypto.subtle.digest('SHA-256', data).then(hashBuffer => {
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                resolve(hashHex);
            });
        } else {
            // Fallback for browsers without SubtleCrypto
            let hash = 0;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash = hash & hash; // Convert to 32bit integer
            }
            resolve(hash.toString());
        }
    });
}

// Check if device has active demo access
async function checkDemoAccess(fingerprint) {
    const snapshot = await firebase.database().ref('demoDevices').child(fingerprint).once('value');
    const deviceData = snapshot.val();

    if (!deviceData) {
        return 'never_accessed'; // New device
    }
    if (deviceData.expires > Date.now()) {
        return 'active'; // Active demo session
    }
    return 'expired'; // Demo already used
}


// Check if cooldown period is over
function checkCooldown(fingerprint) {
    return new Promise(resolve => {
        firebase.database().ref('demoCooldown').child(fingerprint).once('value', snapshot => {
            const data = snapshot.val();
            if (!data || data.expires < Date.now()) {
                resolve(true); // No cooldown or cooldown expired
            } else {
                resolve(false); // Still in cooldown
            }
        });
    });
}

// Get existing demo session data
async function getDemoSession(fingerprint) {
    const snapshot = await firebase.database().ref('demoDevices').child(fingerprint).once('value');
    const sessionData = snapshot.val();
    
    if (!sessionData) {
        throw new Error('No demo session found');
    }
    
    return {
        username: sessionData.firstUsername,
        expires: sessionData.expires,
        firstAccess: sessionData.firstAccess
    };
}


// Start a new demo session
async function startNewDemoSession(username, fingerprint) {
    const now = Date.now();
    const expires = now + (30 *30 * 1000); // 30 seconds demo period

    // Store device info in Firebase (regardless of username)
    await firebase.database().ref('demoDevices').child(fingerprint).set({
        firstUsername: username,
        firstAccess: now,
        expires: expires,
        lastAccess: now,
        status: 'active',
        userAgent: navigator.userAgent,
        screenResolution: `${screen.width}x${screen.height}`,
        ip: '' // Can be populated from a backend service
    });

    // Store in localStorage for session resumption
    localStorage.setItem('demoSession', JSON.stringify({
        fingerprint: fingerprint,
        expires: expires
    }));

    // Start the timer
    startDemoTimer(expires);
    document.getElementById('userNameDisplay').textContent = username + ' (Demo)';
    showToast('Demo session started. You have 30 seconds of access.');
}





// Start the demo timer
function startDemoTimer(expires) {
    const timerElement = document.createElement('div');
    timerElement.id = 'demoTimer';
    timerElement.style.position = 'fixed';
    timerElement.style.bottom = '20px';
    timerElement.style.right = '20px';
    timerElement.style.backgroundColor = 'rgba(0,0,0,0.7)';
    timerElement.style.color = 'white';
    timerElement.style.padding = '10px 15px';
    timerElement.style.borderRadius = '5px';
    timerElement.style.zIndex = '1000';
    timerElement.style.fontFamily = 'monospace';
    timerElement.style.fontSize = '16px';
    document.body.appendChild(timerElement);
    
    function updateTimer() {
        const now = Date.now();
        const remaining = expires - now;
        
        if (remaining <= 0) {
            timerElement.textContent = 'Demo expired!';
            timerElement.style.backgroundColor = 'rgba(255,0,0,0.7)';
            
            // Get fingerprint from local storage
            const sessionData = JSON.parse(localStorage.getItem('demoSession') || '{}');
            if (sessionData.fingerprint) {
                showPermanentExpiryMessage();
            }
            return;
        }
        
        const seconds = Math.floor(remaining / 1000);
        timerElement.textContent = `Demo: ${seconds}s remaining`;
        timerElement.style.backgroundColor = remaining < 10000 ? 'rgba(255,165,0,0.7)' : 'rgba(0,0,0,0.7)';
        
        requestAnimationFrame(updateTimer);
    }
    
    updateTimer();
}




function showSessionExpiredMessage() {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.8)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.flexDirection = 'column';
    overlay.style.color = 'white';
    overlay.style.textAlign = 'center';
    overlay.style.padding = '20px';

    overlay.innerHTML = `
        <h2 style="margin-bottom: 20px;">Demo Session Expired</h2>
        <p style="margin-bottom: 30px; max-width: 500px;">
            Thank you for trying the demo. For full access or inquiries, please contact:
        </p>
        ${getContactInfoHTML()}
    `;

    document.body.appendChild(overlay);
}

function showProjectInfo() {
    const infoPanel = document.createElement('div');
    infoPanel.style.position = 'fixed';
    infoPanel.style.bottom = '70px';
    infoPanel.style.right = '20px';
    infoPanel.style.backgroundColor = 'rgba(0,0,0,0.7)';
    infoPanel.style.color = 'white';
    infoPanel.style.padding = '15px';
    infoPanel.style.borderRadius = '5px';
    infoPanel.style.zIndex = '1000';
    infoPanel.style.maxWidth = '300px';
    infoPanel.style.fontSize = '14px';

    infoPanel.innerHTML = `
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <img src="https://avatars.githubusercontent.com/u/12345678?v=4" 
                 style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;" 
                 alt="Hemant Borana">
            <div>
                <strong>Hemant Borana</strong><br>
                Project Designer & Admin
            </div>
        </div>
        ${getContactInfoHTML()}
    `;

    document.body.appendChild(infoPanel);
}

function getContactInfoHTML() {
    return `
        <div style="margin-bottom: 15px;">
            <div style="margin-bottom: 5px;"><i class="fas fa-envelope"></i> hemantpb123@gmail.com</div>
            <div><i class="fas fa-phone"></i> +91 9284494154</div>
        </div>
        <div style="display: flex; justify-content: center; gap: 10px;">
            <a href="https://www.linkedin.com/in/hemant-parasmal-borana-17a742289" 
               target="_blank" style="color: white; font-size: 20px;">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/hb00112" 
               target="_blank" style="color: white; font-size: 20px;">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://www.facebook.com/share/16o96MwNcJ/" 
               target="_blank" style="color: white; font-size: 20px;">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/hemant_borana_/" 
               target="_blank" style="color: white; font-size: 20px;">
                <i class="fab fa-instagram"></i>
            </a>
        </div>
    `;
}


// Show cooldown screen
function showCooldownScreen() {
    document.body.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column;">
            <h1>Demo Session Expired</h1>
            <p>Thank you for trying our demo. To prevent abuse, demo mode has a 24-hour cooldown period.</p>
            <p>Please try again tomorrow.</p>
            <div id="cooldownTimer" style="margin-top: 20px;"></div>
        </div>
    `;
    
    // Check when they can use demo again
    generateDeviceFingerprint().then(fingerprint => {
        firebase.database().ref('demoCooldown').child(fingerprint).once('value', snapshot => {
            const data = snapshot.val();
            if (data) {
                const cooldownExpires = data.expires;
                
                function updateCooldownTimer() {
                    const now = Date.now();
                    const remaining = cooldownExpires - now;
                    
                    if (remaining <= 0) {
                        document.getElementById('cooldownTimer').textContent = 'Demo mode is now available!';
                        setTimeout(() => {
                            window.location.reload();
                        }, 3000);
                        return;
                    }
                    
                    const hours = Math.floor(remaining / 3600000);
                    const minutes = Math.floor((remaining % 3600000) / 60000);
                    document.getElementById('cooldownTimer').textContent = 
                        `Time until demo is available again: ${hours}h ${minutes}m`;
                    
                    setTimeout(updateCooldownTimer, 60000); // Update every minute
                }
                
                updateCooldownTimer();
            }
        });
    });
}

// Show toast message
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

function proceedWithRegularRegistration(inputUsername) {
    // Regular registration process
    document.getElementById('usernameModal').classList.add('d-none');
    document.body.innerHTML += '<div class="fullscreen-overlay" id="loadingOverlay"><div class="approval-content"><h1>Submitting Request</h1><div class="loading-animation"><div class="circle"></div><div class="circle"></div><div class="circle"></div></div></div></div>';

    firebase.database().ref('approvalRequests').push(inputUsername).then(() => {
        localStorage.setItem('hcUsername', inputUsername);
        logActivity('New user registration request', inputUsername);

        // Remove loading overlay and show pending approval screen
        document.getElementById('loadingOverlay').remove();
        document.getElementById('pendingApprovalScreen').style.display = 'flex';
    });
}

function checkUserStatus() {
    return new Promise((resolve) => {
        // For this implementation, we'll always show the username modal
        // and handle access through the demo system
        registerUser();
        resolve('demo'); // Resolve with 'demo' status
    });
}
// This will detect some common ways to open dev tools (but not all)
let devToolsOpen = false;

// Detect F12 key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))) {
        e.preventDefault();
        devToolsOpen = true;
        handleDevToolsOpen();
    }
});

// Detect right-click inspect
document.addEventListener('contextmenu', (e) => {
    if (devToolsOpen) {
        e.preventDefault();
        handleDevToolsOpen();
    }
});

// This works only in some browsers
let widthThreshold = window.outerWidth - window.innerWidth > 160;
let heightThreshold = window.outerHeight - window.innerHeight > 160;

setInterval(() => {
    const widthCheck = window.outerWidth - window.innerWidth > 160;
    const heightCheck = window.outerHeight - window.innerHeight > 160;
    
    if ((widthCheck && !widthThreshold) || (heightCheck && !heightThreshold)) {
        // Dev tools might have been opened
        devToolsOpen = true;
        handleDevToolsOpen();
    }
    
    widthThreshold = widthCheck;
    heightThreshold = heightCheck;
}, 1000);

function handleDevToolsOpen() {
    // Clear everything
    document.body.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial;
            text-align: center;
            z-index: 99999;
            padding: 20px;
        ">
            <div>
                <h1>Developer Tools Detected</h1>
                <p>This application does not allow access to developer tools.</p>
                <p>The page will refresh automatically.</p>
            </div>
        </div>
    `;
    
    // Force refresh after delay
    setTimeout(() => {
        window.location.reload();
    }, 2000);
    
    // Optional: Log this attempt to your server
    // logDevToolsAttempt();
}