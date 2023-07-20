import * as React from 'react';
import {  Timeline, 
          TimelineItem, 
          TimelineSeparator,
          TimelineConnector,
          TimelineContent,
          TimelineDot } from '@mui/lab';

          
function BasicTimeline() {
    return (
      <div class="timeline">
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Code</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
      </Timeline>
      </div>
    );
  }

  export default BasicTimeline;