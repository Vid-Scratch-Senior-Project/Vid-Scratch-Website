'use client'

import { RiDownloadLine, RiFolder5Fill, RiFolderFill } from "@remixicon/react";

export default function PoisoningProcessorOutput() {
    const handleDownload = () => {
        // Your download logic here
        console.log('Download initiated');
    };
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.3rem',
            }}>
            <div className="text-lg font-semibold"
                style={{
                    backgroundColor: 'var(--box-primary-color)',
                    width: '100%',
                    padding: 10
                }}>
                3. Output
            </div>
            <div className="flex flex-col justify-center gap-4 p-4"
                style={{
                    backgroundColor: 'var(--box-secondary-color)',
                    width: '100%',
                }}>
                <div className="flex justify-between p-4">
                    <div className="flex items-center gap-2">
                        <button className="btn px-4 py-2 gradient-btn-start-processing"
                            onClick={handleDownload}
                            style={{
                                borderColor: 'var(--senary-text-color)',
                                borderRadius: '50px',
                                padding: 20,
                            }}>
                            <div
                                style={{
                                    color: 'var(--primary-text-color)'
                                }}>
                                Start Process
                            </div>
                        </button>
                    </div>
                    <button className="btn px-4 py-2"
                        onClick={handleDownload}
                        style={{
                            borderColor: 'var(--senary-text-color)',
                            borderRadius: '50px',
                            padding: 20,
                        }}>
                        Save <RiDownloadLine size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}