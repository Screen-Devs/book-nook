import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';
import CommentsWithinReview from '../../CommentsWithinReview.jsx';

const CommentAccordian = ({comments, bookId, reviewId}) => {
  return (
    <div>
      <Accordion style={{minWidth: 550, marginBottom: 0, width: '100%'}}>
        <AccordionSummary
          expandIcon={<ExpandMore/>}
        >
          <Typography>Show comments</Typography>
        </AccordionSummary>
        <AccordionDetails style={{minWidth: 550, marginBottom: 0, width: '100%'}}>
          <Typography className="none" style={{overflow: 'auto', maxHeight: '220px', width: '100%'}}>
            <CommentsWithinReview
              comments={comments}
              bookId={bookId}
              reviewId={reviewId}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CommentAccordian
