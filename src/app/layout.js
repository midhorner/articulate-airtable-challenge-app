import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning style={{colorScheme: "light",backgroundColor: "white"}}>
        <body>
          <Provider>
            <Theme appearance="light">
              {children}
            </Theme>            
          </Provider>
        </body>
    </html>
  );
}