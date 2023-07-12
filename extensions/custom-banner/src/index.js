import { extend, Banner } from "@shopify/checkout-ui-extensions";
// [START custom-banner.ext-point]
// Set the entry points for the extension
extend("Checkout::Dynamic::Render", renderApp);
extend("Checkout::DeliveryAddress::RenderBefore", renderApp);
// [END custom-banner.ext-point]

function renderApp(root, { settings }) {

  // [START custom-banner.use-settings]
  // Use the merchant-defined settings to retrieve the extension's content
  const {title, description, collapsible, status: merchantStatus} = settings;

  // Set a default status for the banner if a merchant didn't configure the banner in the checkout editor
  const status = merchantStatus ?? 'info';
  // [END custom-banner.use-settings]

  // [START custom-banner.render]
  // Render the banner
  const app = root.createComponent(
    Banner,
    {
      title,
      status,
      collapsible,
    },
    [description]
  );

  root.appendChild(app);
  // [END custom-banner.render]
}
