const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id:1,
    text: "Bienvenido a HERO'S DAWN",
    options: [
      {
        text: '»',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Eres un explorador',
    options: [
      {
        text: '¿Tan rápido?',
        nextText: 3
      },
      {
        text: '¿Cuánto tiempo estuve dormido?',
        nextText: 4
      }
    ]
  },
  {
    id: 3,
    text: 'Capitán del barco: Sí, al parecer llegamos antes de lo esperado.',
    options: [
      {
        text: '¿Pasó algo interesante?',
        nextText: 7
      },
      {
        text: 'Es bueno escucharlo',
        nextText: 8
      }
    ]
  },
  {
    id: 4,
    text: 'Capitán del barco: No lo sé, pero llegamos antes de lo esperado, sanos y salvos.',
    options: [
      {
        text: '¿Qué quieres decir con eso?',
        nextText: 5
      },
      {
        text: 'Me alegro',
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    text: 'Capitán Blake: ¿No lo sentiste?',
    options: [
      {
        text: '¿Qué cosa?',
        nextText: 7
      },
      {
        text: 'No se de que estás hablando, dormí como un bebé',
        nextText: 7
      }
    ]
  },
  {
    id: 5,
    text: 'Capitán del barco: ¿Dormíste bien?',
    options: [
      {
        text: 'Sí, ¿por qué no debería?',
        nextText: 7
      },
      {
        text: '¿Pasó algo?',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: 'Capitán del barco: Hubo una tormenta anoche, ¿no la sentíste?.',
    options: [
      {
        text: 'Pues supongo que no',
        nextText: 8
      },
      {
        text: 'Yo pensé que era marea alta',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: 'Capitán del barco: Lo bueno es que llegamos.',
    options: [
      {
        text: '¿Y lo malo?',
        nextText: 9
      },
      {
        text: 'Bueno me despido',
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    text: 'Capitán del barco: Pues que mi barco apenas anda.',
    options: [
      {
        text: 'Lo siento',
        nextText: 10
      },
      {
        text: 'Al menos funciona',
        nextText: 11
      }
    ]
  },
  {
    id: 10,
    text: 'Capitán del barco: Espero y consigas lo que buscas.',
    options: [
      {
        text: 'Eso espero',
        nextText: 13
      },
      {
        text: 'Suerte en tu viaje',
        nextText: 12
      }
    ]
  },
  {
    id: 11,
    text: 'Capitán del barco: Jaja, es verdad.',
    options: [
      {
        text: 'Nos vemos',
        nextText: 13
      },
      {
        text: 'Suerte en tu viaje',
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    text: 'Capitán del barco: Lo mismo digo',
    options: [
      {
        text: '*Continuar*',
        nextText: 13
      },
      {
        text: '*Pedir dinero al capitán*',
        setState: { coinCash: true },
        nextText: 13
      }
    ]
  },
  {
    id: 13,
    text: '*Llegas a una aldea desconocida, en la isla de "Nova Tera". Lo que no sabes, es que dentro de los próximos 10 días tu vida cambiará...*',
    options: [
      {
        text: 'Countinuará...',
        nextText: -1
      }
    ]
  }
]

startGame()