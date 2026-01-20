'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Trackingui from '../../components/globalsearch/trackingui';
import Header from '../../layout/header-3';
import Footer from '../../layout/footer/footer';

export default function TrackingPage() {
    const router = useRouter();
    const { id } = router.query; // ✅ receive from URL

    const [trackingData, setTrackingData] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!router.isReady) return; // wait until router is ready

        const fetchData = async () => {
            try {
                const res = await fetch(`https://trackapi.saamitradestar.com/products?C_NO=${id}`);
                const res2 = await fetch(`https://trackapi.saamitradestar.com/customers?Cust_NO=${id}`);
                console.log("customer", res2)
                const data = await res.json();
                const data2 = await res2.json();
                setTrackingData(data || []);
                setCustomerData(data2 || []);
            } catch (err) {
                console.error(err);
                setTrackingData([]);
                setCustomerData([]);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [router.isReady, id]);

    return (
        <div>
            <div className="flex items-center justify-center w-full h-[20vh]">
                <Header />
            </div>

            {loading ? (
                <p className="text-center">Loading tracking details…</p>
            ) : (
                <Trackingui data={trackingData} id={id} customerData={customerData} />
            )}

            <Footer />
        </div>
    );
}
