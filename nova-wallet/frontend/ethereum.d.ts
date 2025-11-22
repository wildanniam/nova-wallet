type EthereumEventHandler = (...args: unknown[]) => void;

interface EthereumRequestArgs {
    method: string;
    params?: readonly unknown[] | Record<string, unknown>;
}

interface EthereumProvider {
    request<T = unknown>(args: EthereumRequestArgs): Promise<T>;
    on(event: string, handler: EthereumEventHandler): void;
    removeListener(event: string, handler: EthereumEventHandler): void;
}

interface Window {
    ethereum?: EthereumProvider;
}