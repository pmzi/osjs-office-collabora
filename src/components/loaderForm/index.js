import React, {createRef, useEffect} from 'react';

export default function LoaderForm(props) {
  const formElem = createRef();

  useEffect(() => {
    formElem.current.submit();
  });

  return (
    <div style={{display: 'none'}}>
      <form
        ref={formElem}
        action={props.url}
        encType="multipart/form-data"
        method="post"
        target="collabora-online-viewer"
        id="collabora-submit-form"
      >
        <input
          name="access_token"
          value={props.token}
          type="hidden"
          id="access-token"
        />
        <input
          name="postmessage_origin"
          value="http://192.168.1.103:8000"
          type="hidden"
          id="postmessage_origin"
        />
        <input type="submit" value="" />
      </form>
    </div>
  );
}
