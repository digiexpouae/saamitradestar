'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Trackingui from '../../components/globalsearch/trackingui';
import Header from '../../layout/header-3';
import Footer from '../../layout/footer/footer';
import { safeFetchJson } from '@/utils/fetchdata';
export default function TrackingPage() {
    const router = useRouter();
    const { id } = router.query; // ✅ receive from URL

    const [trackingData, setTrackingData] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const [podData, setPodData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [podscanData, setpodscanData] = useState()
    useEffect(() => {
        if (!router.isReady) return;

        const fetchData = async () => {
            setLoading(true);

            const trackingData = await safeFetchJson(`https://trackapi.saamitradestar.com/products?C_NO=${id}`, []);
            const customerData = await safeFetchJson(`https://trackapi.saamitradestar.com/customers?Cust_NO=${id}`, []);
            const podData = await safeFetchJson(`https://apps.saamitradestar.com/pod/${id}.jpg`, null);
            const podscanData = await safeFetchJson(`https://apps.saamitradestar.com/pod/scan/${id}.jpg`, null);

            setTrackingData(trackingData);
            setCustomerData(customerData);
            setPodData(podData);
            setpodscanData(podscanData)
            setLoading(false);
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
                <Trackingui data={trackingData} podData={podData} podscanData={podscanData} id={id} customerData={customerData} />
            )}

            <Footer />
        </div>
    );
}
