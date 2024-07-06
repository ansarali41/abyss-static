const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
// body for modal
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

function myFunction(x) {
    x.classList.toggle('change');
}

// employers page radio button click

const radioButtons = document.querySelectorAll('input[type="radio"]');
const image = document.querySelector('#image');
const activeContainer = document.querySelector('#active');
const emergingContainer = document.querySelector('#emerging');
const globalContainer = document.querySelector('#global');

const activeRadioButton = `<div class="dropUp">
<input type="radio" name="image" id="image1"  class="radioButtons"
    onclick="handleChange('active')">
<label for="image1" style="cursor: pointer
        ;">Active (Tier 1)</label>
</div>`;

const activeDropDown = `<div class="dropDown">
<div class="flex items-center">
    <input type="radio" name="image" id="image1" checked class="radioButtons"
        onclick="handleChange('active')">
    <label for="image1" style="cursor: pointer
;">Active (Tier 1)</label>
</div>

<p class="dropParagraph dropDownFeatureText">
    <span class="font-bold">Features</span>
</p>
<ul class="cardList">
    <li class="dropParagraph ulList">
        <span class="font-bold">Unlimited</span> Candidate Resume Views
    </li>
    <li class="dropParagraph ulList">
        Post <strong> 3 </strong> ‘Active’ Jobs Simultaneously
    </li>
    <li class="dropParagraph ulList">
        <span class="engageText" onclick="openModal('myModal')">Engage</span> with <strong>60</strong> unique
        candidates per billing period (<strong>720</strong> for yearly plans)
    </li>
    <li class="dropParagraph ulList">
        <span class="font-bold">1</span> user seat (account login)
    </li>
    <li class="dropParagraph ulList">
        <span class="font-bold">Basic</span> company Brand Page
    </li>

</ul>
</div>`;

const emergingRadioButton = `<div class="dropUp">
<input type="radio" name="image" id="image2" class="radioButtons"
    onclick="handleChange('emerging')">
<label for="image2" style="cursor: pointer
        ;">Emerging Growth
    (Tier 2)</label>
</div>`;

const emergingDropDown = `<div class="dropDown">
<div class="flex items-center">
    <input type="radio" name="image" id="image2" class="radioButtons" checked
        onclick="handleChange('emerging')">
    <label for="image2" style="cursor: pointer
;">Emerging Growth
        (Tier 2)</label>
</div>

<p class="dropParagraph dropDownFeatureText">
    <span class="font-bold">Features</span>
</p>
<ul class="cardList">
    <li class="dropParagraph ulList">
        <span class="font-bold">Unlimited</span> Candidate Resume Views
    </li>
    <li class="dropParagraph ulList">
        Post <strong>7</strong> ‘Active’ Jobs Simultaneously
    </li>
    <li class="dropParagraph ulList">
        <span class="engageText" onclick="openModal('myModal')">Engage</span> with <strong>420</strong> unique
        candidates per billing period (<strong>5,040</strong> for yearly plans)
    </li>
    <li class="dropParagraph ulList">
        Internal chat with your team. Never miss a beat!
    </li>
    <li class="dropParagraph ulList">
        <strong>3</strong> user seats (account logins)
    </li>
    <li class="dropParagraph ulList">
        <strong>Full</strong> company Brand Page
    </li>
</ul>
</div>`;

const globalRadioButton = `<div class="dropUp">
<input type="radio" name="image" id="image3" class="radioButtons"
    onclick="handleChange('global')">
<label for="image3" style="cursor: pointer
    ;">Global (Tier 3)</label>
</div>`;

const globalDropDown = `
<div class="dropDown">
                            <div class="flex items-center">
                                <input type="radio" name="image" id="image3" class="radioButtons" checked
                                    onclick="handleChange('global')">
                                <label for="image3" style="cursor: pointer
                            ;">Global (Tier 3)</label>
                            </div>

                            <p class="dropParagraph dropDownFeatureText">
                                <span class="font-bold">Features</span>
                            </p>
                            <ul class="cardList">
                                <li class="dropParagraph ulList">
                                    <span class="font-bold">Unlimited </span>
                                    Candidate Resume Views
                                </li>
                                <li class="dropParagraph ulList">
                                    Post <span class="font-bold">Unlimited </span>
                                    Jobs Simultaneously
                                </li>
                                <li class="dropParagraph ulList">
                                    <strong>Unlimited</strong> candidate <span class="engageText" onclick="openModal('myModal')">engagements</span> for
                                    each billing period
                                </li>
                                <li class="dropParagraph ulList">
                                    <span class="font-bold">10</span> user seats (account logins)<span
                                        class="cardStar">*</span>
                                </li>
                                <li class="dropParagraph ulList">
                                    Internal chat with your team. Never miss a beat!
                                </li>
                                <li class="dropParagraph ulList">
                                    <span class="font-bold">Full </span>
                                    Company Branding with consolidated job listings page
                                </li>
                                <li class="dropParagraph ulList">
                                    <strong>Verified ‘Global’ Account Badge – </strong> <br /> Exclusive benefit
                                    to Tier 3 Plans
                                </li>
                            </ul>
                            <p class="cardLastText">
                                <span class="cardStar">*</span>Additional seats can be purchased <br /> at
                                $199 per month / per seat.
                            </p>
                        </div>`;

let tier = 'active';
function handleChange(value) {
    if (value === 'active') {
        image.src = './images/Employers/tier-1.png';
        activeContainer.innerHTML = activeDropDown;
        emergingContainer.innerHTML = emergingRadioButton;
        globalContainer.innerHTML = globalRadioButton;
    } else if (value === 'emerging') {
        image.src = './images/Employers/tier-2.png';
        activeContainer.innerHTML = activeRadioButton;
        emergingContainer.innerHTML = emergingDropDown;
        globalContainer.innerHTML = globalRadioButton;
    } else if (value === 'global') {
        image.src = './images/Employers/tier-3.png';
        activeContainer.innerHTML = activeRadioButton;
        emergingContainer.innerHTML = emergingRadioButton;
        globalContainer.innerHTML = globalDropDown;
    }
}
handleChange('active');

// modal section

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    body.style.overflow = 'hidden';
}

// var closeButton = modal.querySelector('.close-modal');
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
    body.style.overflow = 'auto';
}
function toggleCreateAndLoginModal(closeModalId, openModalId) {
    closeModal(closeModalId);
    openModal(openModalId);
}
