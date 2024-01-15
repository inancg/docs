import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line
import React from 'react';
import { TextField } from '@vaadin/react-components/TextField.js';
import { Icon } from '@vaadin/react-components/Icon.js';
import { Tooltip } from '@vaadin/react-components/Tooltip.js';
import '@vaadin/icons';

function Example() {
  return (
    // tag::snippet[]
    <TextField label="Label" helperText="Helper text" placeholder="Placeholder" clearButtonVisible>
      <Tooltip slot="tooltip" text="Tooltip text" />
      <Icon slot="prefix" icon="vaadin:vaadin-h" />
      <span slot="suffix">:)</span>
    </TextField>
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
