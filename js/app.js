console.log('connected')

// Hide Show Learning Plan Function Begins

let activeSection = 'block-1'

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
      'block-1',
      'block-2',
      'block-3',
      'block-4',
      'block-5',
      'block-6',
      'block-7',
    ],
    sectionId
  )
  activeSection = sectionId

  console.log(activeSection)
}

// let activeSectionValues = 'values-block-1'

// function hideShowToggleValues(sectionId) {
//   closeActiveSection()
//   hideShow(
//     [
//       'values-block-1',
//       'values-block-2',
//       'values-block-3',
//       'values-block-4',
//       'values-block-5',
//     ],
//     sectionId
//   )
//   activeSection = sectionId

//   console.log(activeSection)
// }

// Hide Show Learning Plan Function Ends
