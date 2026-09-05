import { motion } from "framer-motion";

export default function PrivacyPolicy() {

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full pt-24 pb-16"
        >
            <div className="solid-background p-8 w-full flex flex-col gap-6 text-[var(--color-body)] text-sm leading-relaxed">
                <h2 className="text-white">Privacy Policy</h2>
                <p>
                    <strong className="text-white">Privacy Policy for KeepassUX</strong>
                </p>
                <p>
                    <strong className="text-white">Effective Date:</strong> September 4, 2026
                </p>
                <p>
                    This Privacy Policy applies to the KeepassUX mobile application (the "Application"), an open-source, local-first password manager based on KeePass, developed and maintained by Daniel Duran (the "Service Provider").
                </p>

                <h3 className="text-white mt-4">1. Core Commitment: 100% Local and No Data Collection</h3>
                <p>
                    KeepassUX does not collect, track, store, or transmit any personal data, usage metrics, or diagnostic information.
                </p>
                <p>
                    <strong className="text-white">Offline &amp; Local Storage:</strong> All your vault data, passwords, credentials, and settings remain strictly stored on your local device or in the location you explicitly choose (such as local storage or your own chosen cloud provider integrations). The Service Provider does not operate external servers to host, back up, or process your passwords.
                </p>
                <p>
                    <strong className="text-white">No Telemetry or Tracking:</strong> The Application contains no tracking scripts, analytics SDKs, advertising networks, or third-party telemetry tools.
                </p>
                <p>
                    <strong className="text-white">No Account Required:</strong> You do not need to register an account or share any credentials with the Service Provider to use KeepassUX.
                </p>

                <h3 className="text-white mt-4">2. Network Activity &amp; Open Source Transparency</h3>
                <p>
                    KeepassUX operates entirely locally on your device. The Application does not establish background network connections with the Service Provider.
                </p>
                <p>
                    Because KeepassUX is open source, the complete source code is publicly accessible for review, audit, and verification by the community.
                </p>

                <h3 className="text-white mt-4">3. Third-Party Access</h3>
                <p>
                    Since the Application does not collect, process, or store any personal data, no data is shared with or sold to third parties.
                </p>

                <h3 className="text-white mt-4">4. Location Information</h3>
                <p>
                    The Application does not request, collect, or access precise or coarse location information from your mobile device.
                </p>

                <h3 className="text-white mt-4">5. Voluntarily Provided Support Information</h3>
                <p>
                    If you contact the Service Provider directly via email (e.g., for support, bug reports, or feature requests), any information you choose to share (such as your email address or conversation history) will be used solely to respond to your inquiry.
                </p>
                <p>
                    You may request the deletion of any support communications at any time by contacting: ddur1302@gmail.com.
                </p>

                <h3 className="text-white mt-4">6. Data Security</h3>
                <p>
                    Your vault's security relies on KeePass-standard encryption executed entirely on your device. Because the Service Provider has no access to your master password, key files, or encrypted databases, the Service Provider cannot recover your data or access your vault under any circumstances.
                </p>

                <h3 className="text-white mt-4">7. Children's Privacy</h3>
                <p>
                    The Application does not knowingly collect or solicit personal information from anyone, including children under 16 years of age.
                </p>

                <h3 className="text-white mt-4">8. Changes to This Privacy Policy</h3>
                <p>
                    This Privacy Policy may be updated occasionally to reflect app updates or legal requirements. Any changes will be posted with an updated "Effective Date."
                </p>

                <h3 className="text-white mt-4">9. Contact Information</h3>
                <p>
                    If you have questions about this Privacy Policy or the security practices of KeepassUX, please contact:
                </p>
                <p>
                    <strong className="text-white">Developer:</strong> Daniel Duran<br />
                    <strong className="text-white">Email:</strong> ddur1302@gmail.com
                </p>
            </div>
        </motion.section>
    );
}
