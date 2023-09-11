console.log('connected')

// Learning Section Hide Show Variables

const learningOne = document.querySelector('#learning-block-1')
const learningTwo = document.querySelector('#learning-block-2')
const learningThree = document.querySelector('#learning-block-3')
const learningFour = document.querySelector('#learning-block-4')
const learningFive = document.querySelector('#learning-block-5')
const learningSix = document.querySelector('#learning-block-6')
const learningSeven = document.querySelector('#learning-block-7')

// Learning Section btn Variables

const learningBtnOne = document.querySelector('#learning-btn-1')
const learningBtnTwo = document.querySelector('#learning-btn-2')
const learningBtnThree = document.querySelector('#learning-btn-3')
const learningBtnFour = document.querySelector('#learning-btn-4')
const learningBtnFive = document.querySelector('#learning-btn-5')
const learningBtnSix = document.querySelector('#learning-btn-6')
const learningBtnSeven = document.querySelector('#learning-btn-7')

let activeSection = 'learning-block-1'

function hideShow(sectionIds, sectionToShow) {
  for (let i = 0; i < sectionIds.length; i++) {
    let section = document.getElementById(sectionIds[i])
    if (section.id === sectionToShow) {
      section.classList.remove('hidden')
    } else {
      section.classList.add('hidden')
    }
  }
}

function closeActiveSection() {
  let section = document.getElementById(activeSection)
  if (section) {
    section.classList.add('hidden')
  }
}

function hideShowToggle(sectionId) {
  closeActiveSection()
  hideShow(
    [
      'learning-block-1',
      'learning-block-2',
      'learning-block-3',
      'learning-block-4',
      'learning-block-5',
      'learning-block-6',
      'learning-block-7',
    ],
    sectionId
  )
  activeSection = sectionId
  
  console.log(activeSection);
}
