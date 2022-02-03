import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import React from 'react';
import CommentsWithinReview from '../../CommentsWithinReview.jsx';

const CommentAccordian = ({comments}) => {
  return (
    <div>
      <Accordion sx={{minWidth: 550, marginBottom: 0}}>
        <AccordionSummary
          expandIcon={<ExpandMore/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Show comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* <CommentsWithinAccordian/> */}
            <CommentsWithinReview comments={comments}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default CommentAccordian
