import PoisoningProcessorInput from "./PoisoningProcessorInput";
import PoisoningProcessorOutput from "./PoisoningProcessorOutput";
import PoisoningProcessorPreview from "./PoisoningProcessorPreview";
import PoisoningProcessorSettings from "./PoisoningProcessorSettings";


export default function PoisoningProcessor() {
    return (
        <div
            style={{
                fontFamily: 'var(--font-poppins)'
            }}>
            <div
            style={{
                fontSize: '2rem',
                display: 'flex',
                justifyContent: 'center'
            }}>
                Demo
            </div>
            <div
            style={{
                display: 'flex',
                gap: '0.3rem',
                justifyContent: 'space-between',
            }}>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    gap: '0.3rem',
                }}>
                    <PoisoningProcessorInput />
                    <PoisoningProcessorSettings />
                    <PoisoningProcessorOutput />
                </div>
                <PoisoningProcessorPreview />
            </div>
            
        </div>
    )
}