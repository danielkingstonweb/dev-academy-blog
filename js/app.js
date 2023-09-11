console.log('connected')

// Hide Show Learning Plan Function Begins

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

  console.log(activeSection)
}

// Hide Show Learning Plan Function Ends
