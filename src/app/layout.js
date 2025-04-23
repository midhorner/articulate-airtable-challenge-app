import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning style={{colorScheme: "light",backgroundColor: "#F2F0EF"}}>
        <body style={{backgroundColor: "#F2F0EF"}}>
          <Provider>
            <Theme appearance="light" style={{backgroundColor: "#F2F0EF"}}>
              {children}
            </Theme>            
          </Provider>
        </body>
    </html>
  );
}