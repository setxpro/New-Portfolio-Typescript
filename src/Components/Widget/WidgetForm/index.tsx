
import { useState } from 'react';
import * as C from './styles';

import bugImageUrl from '../svg/bug.svg';
import ideaImageUrl from '../svg/ideia.svg';
import thoughtImageUrl from '../svg/thought.svg';

import FeedbackTypeStep from './Steps/FeedbackTypeStep';
import FeedbackContentStep from './Steps/FeedbackContentStep';
import FeedbackSuccessStep from './Steps/FeedbackSuccessStep';



export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {

    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
    const [feedbackSended, setFeedbackSended] = useState(false);

    function handleRestartFeedback() {
        setFeedbackSended(false);
        setFeedbackType(null);
    }

    return (
        <C.Container>
            
            {feedbackSended ? (
                    <FeedbackSuccessStep onFeedbackRestartRequest={() => handleRestartFeedback()}/>
                ) : 
                    <>
                        {!feedbackType ? (
                            <FeedbackTypeStep 
                                onFeedbackTypeChanged={setFeedbackType}
                            />
                        ) :
                            <FeedbackContentStep
                                feedbackType={feedbackType} 
                                onFeedbackRestartRequested={handleRestartFeedback}
                                onFeedbackSended={() => setFeedbackSended(true)}
                            />
                        }
                    </>
            }

            <footer>
             <a href="#">Suporte Patrick Anjos</a>
           </footer>
        </C.Container>
    )
}