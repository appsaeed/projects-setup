export default function FacebookLoginIframe({
  width = "260px",
  height = "50px",
  rounded = "",
  size = "large",
  text = "",
  type = "continue_with",
  scope = "public_profile%2Cemail%2Cuser_birthday%2Cuser_friends",
  autoLogout = false,
  continueAs = true,
  appId = "",
  lang = "en_US",
  origin = window.location.origin,
  domain = window.location.host,
  title = "",
  style = {},
}) {
  //local array
  const o_types = ["continue_with", "login_with"];
  const o_sizes = ["large", "medium", "small"];
  const o_scope = "public_profile%2Cemail%2Cuser_birthday%2Cuser_friends";
  //set value url
  const __width = width ? width : "260px";
  const _height = height ? height : "50px";
  const _layout = rounded ? "rounded" : "default";
  const ___size = o_sizes.includes(size) ? size : o_sizes[0];
  const ___type = o_types.includes(type) ? type : o_types[0];
  const __scope = scope ? encodeURIComponent(scope) : o_scope;
  const _logout = autoLogout ? "true" : "false";
  const contnue = continueAs === false ? "false" : "true";
  const __appId = appId ? appId : "274266067164";
  const ___lang = lang ? lang : window.navigator.language || "en-US";
  const _origin = origin ? origin : window.location.origin;
  const _domain = domain ? domain : window.location.host;
  const __title = title ? title : "Facebook Login";

  const channel = `https://staticxx.facebook.com/x/connect/xd_arbiter/?version=46#cb=f3d2fc933e9370c&domain=${_domain}&is_canvas=false&origin=${_origin}/f17de595bd0078c&relation=parent.parent'`;
  let uri = `https://www.facebook.com/v15.0/plugins/login_button.php?`;
  uri += `&locale=${___lang.replace("-", "_")}`;
  uri += `&app_id=${__appId}`;
  uri += `&width=${__width}`;
  uri += `&height=${_height}`;
  uri += `&auto_logout_link=${_logout}`;
  uri += `&button_type=${___type}`;
  uri += `&channel=${encodeURIComponent(channel)}`;
  uri += `&login_text=${text}`;
  uri += `&sdk=joey`;
  uri += `&layout=${_layout}`;
  uri += `&size=${___size}`;
  uri += `&use_continue_as=${contnue}`;
  uri += `&${__scope}`;

  return (
    <iframe
      title={__title}
      frameBorder="0"
      allowFullScreen={true}
      scrolling="no"
      allow="encrypted-media"
      src={uri}
      style={{
        border: "none",
        visibility: "visible",
        width: __width,
        height: _height,
        ...style,
      }}
    ></iframe>
  );
}
