import React, {useEffect, useRef} from "react";

interface TerminalProps {
    logs: string[];
}

const Terminal: React.FC<TerminalProps> = ({logs}: TerminalProps) => {

    const terminalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [logs])
    return (
        <div className="terminal">
            <h3 className="terminal-title"></h3>
            <div className="terminal-logs" ref={terminalRef}>
                {logs.map((log, index) => (
                    <pre key={index} className="log-line">
                        {log}
                    </pre>
                ))}
            </div>
        </div>
    );
}

export default Terminal;