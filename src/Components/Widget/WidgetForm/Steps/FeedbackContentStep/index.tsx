import React, { FormEvent, useState } from 'react';
import { FeedbackType, feedbackTypes } from '../..';
import { ArrowLeftIcon } from '../../../../../styles/icons/icons';
import CloseButton from '../../../CloseButton';
import ScreenshotButton from '../../ScreenshotButton';

import * as C from './styles';

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
    onFeedbackSended: () => void;
}

const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({ 
  feedbackType, 
  onFeedbackRestartRequested, 
  onFeedbackSended 
}) => {

  const [screenshot, setScreenshot] = useState<string | null>(null);

  const [comment, setComment] = useState('');

  const feedbackInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(e: FormEvent) {
      e.preventDefault();
      console.log({
        screenshot,
        comment
      });
      setComment('');
      onFeedbackSended();
  }

  return (
      <C.Container>
        <C.Header>

          <C.ButtonGoBack>
            <ArrowLeftIcon 
              onClick={onFeedbackRestartRequested}
            />
          </C.ButtonGoBack>

          <C.ContentHeader>
            <img src={feedbackInfo.image.source} alt={feedbackInfo.image.alt}/>
            {feedbackInfo.title}
          </C.ContentHeader>
          <CloseButton/>
        </C.Header>

        <form onSubmit={handleSubmitFeedback}>
          <textarea 
            placeholder='Conte com detalhes o que está acontecendo...'
            onChange={e => setComment(e.target.value)}
            value={comment}
          ></textarea>
          <footer>
              <ScreenshotButton
                screenshot={screenshot}
                onScreenshotTook={setScreenshot}
              />
            <C.SendFeedbackButton type='submit' disabled={comment.length === 0}>
              Enviar Feedback
            </C.SendFeedbackButton>
          </footer>
        </form>
      </C.Container>
  );
}

export default FeedbackContentStep;