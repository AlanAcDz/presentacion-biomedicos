import { useEffect, useState } from 'react';
import QRCode from 'qrcode';

export const useQRCode = (url) => {
    const [qrCode, setQrCode] = useState('');
    useEffect(() => {
        QRCode.toDataURL(url).then(
            dataUrl => setQrCode(() => dataUrl)
        );
    }, [url]);
    return [qrCode, setQrCode];
}
