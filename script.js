document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const aiSuggestBtn = document.getElementById('aiSuggestBtn');
    const aiModal = document.getElementById('aiModal');
    const closeModal = document.getElementById('closeModal');
    const addEducation = document.getElementById('addEducation');
    const addExperience = document.getElementById('addExperience');
    const addSkill = document.getElementById('addSkill');
    const skillInput = document.getElementById('skillInput');
    const skillsList = document.getElementById('skillsList');
    const generateResume = document.getElementById('generateResume');
    const resumePreview = document.getElementById('resumePreview');

    // Sample AI suggestions data
    const aiSuggestions = {
        skills: [
            "Consider adding technical skills relevant to your field (e.g., Python, JavaScript, SQL)",
            "Include soft skills like teamwork, communication, and problem-solving",
            "List any certifications or special training you've completed"
        ],
        experience: [
            "Use action verbs to describe your responsibilities (e.g., 'Developed', 'Managed', 'Implemented')",
            "Quantify your achievements when possible (e.g., 'Increased efficiency by 20%')",
            "Keep descriptions concise but informative"
        ],
        education: [
            "Include your GPA if it's 3.0 or higher",
            "List relevant coursework or projects",
            "Mention any academic honors or awards"
        ]
    };

    // Event Listeners
    aiSuggestBtn.addEventListener('click', showAISuggestions);
    closeModal.addEventListener('click', () => aiModal.classList.add('hidden'));
    addEducation.addEventListener('click', addEducationField);
    addExperience.addEventListener('click', addExperienceField);
    addSkill.addEventListener('click', addSkillToList);
    skillInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addSkillToList();
    });
    generateResume.addEventListener('click', generateResumePreview);

    // Functions
    function showAISuggestions() {
        const suggestionsContainer = document.getElementById('aiSuggestions');
        suggestionsContainer.innerHTML = '';

        // Add skills suggestions
        const skillsSection = document.createElement('div');
        skillsSection.innerHTML = `
            <h4 class="font-medium text-indigo-700">Skills Suggestions</h4>
            <ul class="list-disc pl-5 space-y-1">
                ${aiSuggestions.skills.map(s => `<li>${s}</li>`).join('')}
            </ul>
        `;
        suggestionsContainer.appendChild(skillsSection);

        // Add experience suggestions
        const expSection = document.createElement('div');
        expSection.innerHTML = `
            <h4 class="font-medium text-indigo-700">Experience Suggestions</h4>
            <ul class="list-disc pl-5 space-y-1">
                ${aiSuggestions.experience.map(s => `<li>${s}</li>`).join('')}
            </ul>
        `;
        suggestionsContainer.appendChild(expSection);

        // Add education suggestions
        const eduSection = document.createElement('div');
        eduSection.innerHTML = `
            <h4 class="font-medium text-indigo-700">Education Suggestions</h4>
            <ul class="list-disc pl-5 space-y-1">
                ${aiSuggestions.education.map(s => `<li>${s}</li>`).join('')}
            </ul>
        `;
        suggestionsContainer.appendChild(eduSection);

        aiModal.classList.remove('hidden');
    }

    function addEducationField() {
        const educationFields = document.getElementById('educationFields');
        const newEducation = document.createElement('div');
        newEducation.className = 'education-entry grid grid-cols-1 md:grid-cols-2 gap-4 mb-4';
        newEducation.innerHTML = `
            <div>
                <label class="block text-gray-700 mb-2">Institution</label>
                <input type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            <div>
                <label class="block text-gray-700 mb-2">Degree</label>
                <input type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            <div>
                <label class="block text-gray-700 mb-2">Field of Study</label>
                <input type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            <div>
                <label class="block text-gray-700 mb-2">Graduation Year</label>
                <input type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            </div>
            <div class="md:col-span-2 flex justify-end">
                <button class="remove-education text-red-500 hover:text-red-700 text-sm">
                    <i class="fas fa-trash mr-1"></i>Remove
                </button>
            </div>
        `;
        educationFields.appendChild(newEducation);

        // Add event listener to remove button
        newEducation.querySelector('.remove-education').addEventListener('click', function() {
            educationFields.removeChild(newEducation);
        });
    }

    function addExperienceField() {
        const experienceFields = document.getElementById('experienceFields');
        const newExperience = document.createElement('div');
        newExperience.className = 'experience-entry mb-6';
        newExperience.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label class="block text-gray-700 mb-2">Job Title</label>
                    <input type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">Company</label>
                    <input type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">Start Date</label>
                    <input type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
                <div>
                    <label class="block text-gray-700 mb-2">End Date</label>
                    <input type="text" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
                </div>
            </div>
            <div>
                <label class="block text-gray-700 mb-2">Description</label>
                <textarea class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" rows="3"></textarea>
            </div>
            <div class="flex justify-end mt-2">
                <button class="remove-experience text-red-500 hover:text-red-700 text-sm">
                    <i class="fas fa-trash mr-1"></i>Remove
                </button>
            </div>
        `;
        experienceFields.appendChild(newExperience);

        // Add event listener to remove button
        newExperience.querySelector('.remove-experience').addEventListener('click', function() {
            experienceFields.removeChild(newExperience);
        });
    }

    function addSkillToList() {
        const skill = skillInput.value.trim();
        if (skill) {
            const skillTag = document.createElement('div');
            skillTag.className = 'bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full flex items-center';
            skillTag.innerHTML = `
                ${skill}
                <button class="ml-2 text-indigo-500 hover:text-indigo-700">
                    <i class="fas fa-times"></i>
                </button>
            `;
            skillsList.appendChild(skillTag);
            skillInput.value = '';

            // Add event listener to remove button
            skillTag.querySelector('button').addEventListener('click', function() {
                skillsList.removeChild(skillTag);
            });
        }
    }

    function generateResumePreview() {
        // Get form values
        const fullName = document.getElementById('fullName').value || 'Your Name';
        const email = document.getElementById('email').value || 'your.email@example.com';
        const phone = document.getElementById('phone').value || '(123) 456-7890';
        const portfolio = document.getElementById('portfolio').value || 'linkedin.com/in/yourprofile';

        // Generate HTML for preview
        const previewHTML = `
            <div class="resume-container">
                <header class="mb-6">
                    <h1 class="text-2xl font-bold text-indigo-700">${fullName}</h1>
                    <div class="flex flex-wrap gap-x-4 text-gray-600">
                        <span>${email}</span>
                        <span>${phone}</span>
                        <span>${portfolio}</span>
                    </div>
                </header>

                <section class="mb-6">
                    <h2 class="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">Education</h2>
                    ${generateEducationHTML()}
                </section>

                <section class="mb-6">
                    <h2 class="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">Skills</h2>
                    <div class="flex flex-wrap gap-2">
                        ${generateSkillsHTML()}
                    </div>
                </section>

                <section>
                    <h2 class="text-xl font-semibold border-b border-gray-300 pb-1 mb-3">Experience</h2>
                    ${generateExperienceHTML()}
                </section>
            </div>
        `;

        resumePreview.innerHTML = previewHTML;
    }

    function generateEducationHTML() {
        const educationEntries = document.querySelectorAll('.education-entry');
        if (educationEntries.length === 0) return '<p class="text-gray-500">No education information provided</p>';

        let html = '';
        educationEntries.forEach(entry => {
            const inputs = entry.querySelectorAll('input');
            const institution = inputs[0].value || 'Institution Name';
            const degree = inputs[1].value || 'Degree';
            const field = inputs[2].value || 'Field of Study';
            const year = inputs[3].value || 'Graduation Year';

            html += `
                <div class="mb-4">
                    <h3 class="font-medium">${institution}</h3>
                    <div class="flex justify-between text-gray-600">
                        <span>${degree} in ${field}</span>
                        <span>${year}</span>
                    </div>
                </div>
            `;
        });

        return html;
    }

    function generateSkillsHTML() {
        const skillTags = document.querySelectorAll('#skillsList > div');
        if (skillTags.length === 0) return '<span class="text-gray-500">No skills listed</span>';

        let html = '';
        skillTags.forEach(tag => {
            const skill = tag.textContent.trim();
            html += `<span class="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">${skill}</span>`;
        });

        return html;
    }

    function generateExperienceHTML() {
        const experienceEntries = document.querySelectorAll('.experience-entry');
        if (experienceEntries.length === 0) return '<p class="text-gray-500">No experience information provided</p>';

        let html = '';
        experienceEntries.forEach(entry => {
            const inputs = entry.querySelectorAll('input');
            const textarea = entry.querySelector('textarea');
            const title = inputs[0].value || 'Job Title';
            const company = inputs[1].value || 'Company Name';
            const startDate = inputs[2].value || 'Start Date';
            const endDate = inputs[3].value || 'End Date';
            const description = textarea.value || 'Job description and responsibilities';

            html += `
                <div class="mb-4">
                    <div class="flex justify-between">
                        <h3 class="font-medium">${title}</h3>
                        <span class="text-gray-600">${startDate} - ${endDate}</span>
                    </div>
                    <p class="text-gray-700 mb-1">${company}</p>
                    <p class="text-gray-600">${description}</p>
                </div>
            `;
        });

        return html;
    }
});
