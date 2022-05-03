
import { useState } from 'react';
import CloseButton from '../CloseButton';
import * as C from './styles';

import bugImageUrl from '../svg/bug.svg';
import ideaImageUrl from '../svg/ideia.svg';
import thoughtImageUrl from '../svg/thought.svg';



const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'imagem de um inseto'
        }

    },
    IDEA: {
        title: 'Ideia',
        image: {
            source: ideaImageUrl,
            alt: 'imagem de uma lâmpada'
        }

    },
    OTHER: {
        title: 'Outro',
        image: {
            source: thoughtImageUrl,
            alt: 'Imagem de um balão de pensamento'
        }
    },
}

type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    return (
        <C.Container>
            <header>
                <span>Deixe o seu feedback</span>
                <CloseButton/>
            </header>

            {!feedbackType ? (
                <C.Content>
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                            key={key}
                            onClick={() => setFeedbackType(key as FeedbackType)}
                        >
                            <img src={value.image.source} alt={value.image.alt}/>
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </C.Content>
            ) :
            <p>Hello World!</p>
            }

            <footer>
             <a href="#">Suporte</a>
           </footer>
        </C.Container>
    )
}