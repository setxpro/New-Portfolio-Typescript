import React from 'react';
import { FeedbackType, feedbackTypes } from '../..';
import CloseButton from '../../../CloseButton';

import * as C from './styles';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

const FeedbackTypeStep: React.FC<FeedbackTypeStepProps> = ({ onFeedbackTypeChanged }) => {
  return (
    <>
      <header>
        <span>Deixe o seu feedback</span>
          <CloseButton/>
      </header>

      <C.Content>
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
              <button
                  key={key}
                  onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              >
                  <img src={value.image.source} alt={value.image.alt}/>
                  <span>{value.title}</span>
              </button>
          )
        })}
    </C.Content>
    </>
  );
}

export default FeedbackTypeStep;