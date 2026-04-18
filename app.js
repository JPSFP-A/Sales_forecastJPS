const { useState, useMemo, useEffect, useCallback, Component } = React;
        const { LineChart, Line, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = window.Recharts;

        class ErrorBoundary extends Component {
            constructor(props) {
                super(props);
                this.state = { hasError: false, error: null };
            }
            static getDerivedStateFromError(error) { return { hasError: true, error }; }
            render() {
                if (this.state.hasError) {
                    return (
                        <div className="flex h-full w-full items-center justify-center p-6 bg-slate-100">
                            <div className="bg-red-50 border border-red-200 p-8 rounded-xl max-w-2xl w-full shadow-lg">
                                <h1 className="text-2xl font-black text-red-700 mb-4">Oops! The App Crashed</h1>
                                <p className="text-sm text-red-600 mb-4">Something went wrong during execution. Check the error details below:</p>
                                <pre className="bg-white p-4 rounded text-xs text-slate-800 overflow-auto shadow-inner">{this.state.error && this.state.error.toString()}</pre>
                            </div>
                        </div>
                    );
                }
                return this.props.children;
            }
        }

        // --- Icons ---
        const Icons = {
            PieChart: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>,
            Database: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
            Activity: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
            TrendingUp: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
            Calculator: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 18h.01"/><path d="M12 14h.01"/><path d="M12 18h.01"/></svg>,
            Wind: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2"/><path d="M12.59 19.41A2 2 0 1 0 14 16H2"/><path d="M15.83 7.17a2 2 0 1 0-1.41 3.42H20"/></svg>,
            Filter: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>,
            BookOpen: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
            Users: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
            Zap: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
            Building: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>,
            Calendar: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
            CheckCircle: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
            Download: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
            Briefcase: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
            Save: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>,
            History: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
            Trash: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
            X: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
            Eye: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>,
            Link: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>,
            Sliders: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>,
            RefreshCw: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>,
            CloudUp: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path><polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line></svg>,
            CloudDown: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path><polyline points="8 16 12 20 16 16"></polyline><line x1="12" y1="12" x2="12" y2="20"></line></svg>,
            Star: ({ filled }) => <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
            Grid: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>
        };

        // --- Generic Sorting Helper ---
        const sortArray = (items, sortConfig) => {
            if (!sortConfig || !sortConfig.key) return items;
            return [...items].sort((a, b) => {
                let aVal = a[sortConfig.key];
                let bVal = b[sortConfig.key];
                if (aVal === null || aVal === undefined) aVal = '';
                if (bVal === null || bVal === undefined) bVal = '';
                if (typeof aVal === 'string') aVal = aVal.toLowerCase();
                if (typeof bVal === 'string') bVal = bVal.toLowerCase();
                if (aVal < bVal) return sortConfig.direction === 'ascending' ? -1 : 1;
                if (aVal > bVal) return sortConfig.direction === 'ascending' ? 1 : -1;
                return 0;
            });
        };

        const SortIcon = ({ columnKey, sortConfig }) => {
            if (!sortConfig || sortConfig.key !== columnKey) return <span className="ml-1 opacity-20 inline-block w-2">↕</span>;
            return sortConfig.direction === 'ascending' ? <span className="ml-1 text-blue-500 inline-block w-2">▲</span> : <span className="ml-1 text-blue-500 inline-block w-2">▼</span>;
        };

        const SortHeader = ({ label, columnKey, currentSort, requestSort, className="" }) => (
            <th className={`sortable p-2 ${className}`} onClick={() => requestSort(columnKey)}>
                <div className={`flex items-center gap-1 ${className.includes('text-right') ? 'justify-end' : ''}`}>
                    <span>{label}</span>
                    <SortIcon columnKey={columnKey} sortConfig={currentSort} />
                </div>
            </th>
        );

        // --- Utils ---
        const exportCSV = (data, filename) => {
            if (!data || !data.length) return;
            const headers = Object.keys(data[0]).filter(k => typeof data[0][k] !== 'object');
            const csvRows = [
                headers.join(','),
                ...data.map(row => headers.map(h => `"${(row[h] !== undefined && row[h] !== null) ? row[h].toString().replace(/"/g, '""') : ''}"`).join(','))
            ];
            const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };

        const monthMap = {"January":1,"February":2,"March":3,"April":4,"May":5,"June":6,"July":7,"August":8,"September":9,"October":10,"November":11,"December":12};
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const rcOrder = ['BU', 'EV', 'RT10', 'RT20', 'RT40', 'RT50', 'RT60', 'RT70'];
        const getRcWeight = (rc) => {
            const index = rcOrder.findIndex(r => r.toLowerCase() === (rc || '').toLowerCase());
            return index === -1 ? 999 : index;
        };

        const parseTimeStr = (str) => {
            if (!str) return { year: 0, month: 0, qtr: 0, sortKey: 0, text: 'Unassigned' };
            const parts = str.split(' ');
            if (parts.length !== 2) return { year: 0, month: 0, qtr: 0, sortKey: 0, text: str };
            const m = monthMap[parts[0]] || 0;
            const y = parseInt(parts[1]) || 0;
            const q = Math.ceil(m / 3);
            return { year: y, month: m, qtr: q, text: str, sortKey: (y * 100) + m, qtrText: `Q${q} ${y}` };
        };

        const formatNum = (num, decimals=0) => Number(num||0).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
        const formatPct = (num) => (Number(num||0) * 100).toFixed(1) + '%';
        const cleanVal = (val) => parseFloat((val || '0').toString().replace(/,/g, ''));

        const parseCSV = (text) => {
            const rows = []; let currentRow = []; let currentCell = ''; let inQuotes = false;
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                if (inQuotes) {
                    if (char === '"' && text[i + 1] === '"') { currentCell += '"'; i++; }
                    else if (char === '"') { inQuotes = false; }
                    else { currentCell += char; }
                } else {
                    if (char === '"') { inQuotes = true; }
                    else if (char === ',') { currentRow.push(currentCell); currentCell = ''; }
                    else if (char === '\n' || char === '\r') {
                        currentRow.push(currentCell); rows.push(currentRow); currentRow = []; currentCell = '';
                        if (char === '\r' && text[i + 1] === '\n') i++;
                    } else { currentCell += char; }
                }
            }
            if (currentCell || currentRow.length > 0) { currentRow.push(currentCell); rows.push(currentRow); }
            const headers = rows[0]?.map(h => h.trim()) || [];
            const data = [];
            for (let i = 1; i < rows.length; i++) {
                if (rows[i].length < 2) continue;
                const obj = {};
                headers.forEach((h, j) => { obj[h] = rows[i][j] ? rows[i][j].trim() : ''; });
                data.push(obj);
            }
            return data;
        };

        function App() {
            const [activeTab, setActiveTab] = useState('overview');

            // --- PRESENCE & IDENTITY ---
            const [currentUser, setCurrentUser] = useState(() => localStorage.getItem('jps_user_name') || '');
            const [showNamePrompt, setShowNamePrompt] = useState(false);
            const [nameInput, setNameInput] = useState('');
            const [onlineUsers, setOnlineUsers] = useState({});  // { userId: { name, color, lastSeen } }
            const [realtimeToast, setRealtimeToast] = useState(null); // { msg, type }
            const presenceChannelRef = React.useRef(null);
            const realtimeChannelRef = React.useRef(null);
            const userIdRef = React.useRef(() => {
                let id = localStorage.getItem('jps_user_id');
                if (!id) { id = 'u_' + Math.random().toString(36).substr(2, 9); localStorage.setItem('jps_user_id', id); }
                return id;
            })();

            const AVATAR_COLORS = ['#3b82f6','#8b5cf6','#10b981','#f59e0b','#ef4444','#06b6d4','#ec4899','#84cc16'];
            const getColor = (userId) => AVATAR_COLORS[Math.abs(userId.split('').reduce((a,c)=>a+c.charCodeAt(0),0)) % AVATAR_COLORS.length];
            const getInitials = (name) => name.trim().split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);

            const showToast = (msg, type = 'info') => {
                setRealtimeToast({ msg, type });
                setTimeout(() => setRealtimeToast(null), 4000);
            };

            // Show name prompt on first load if no name stored
            useEffect(() => {
                if (!currentUser) setShowNamePrompt(true);
            }, []);

            const handleNameSubmit = () => {
                const name = nameInput.trim();
                if (!name) return;
                localStorage.setItem('jps_user_name', name);
                setCurrentUser(name);
                setShowNamePrompt(false);
            };

            // --- SUPABASE CONFIGURATION ---
            // Priority: embedded constants > localStorage > empty
            const [supabaseConfig, setSupabaseConfig] = useState(() => {
                if (window.EMBEDDED_SUPABASE_URL && window.EMBEDDED_SUPABASE_KEY) {
                    // Embedded creds win — persist to localStorage so manual sync button works too
                    const cfg = { url: window.EMBEDDED_SUPABASE_URL, key: window.EMBEDDED_SUPABASE_KEY };
                    localStorage.setItem('jps_supabase_config', JSON.stringify(cfg));
                    return cfg;
                }
                const saved = localStorage.getItem('jps_supabase_config');
                return saved ? JSON.parse(saved) : { url: '', key: '' };
            });
            const [supabaseStatus, setSupabaseStatus] = useState('disconnected');

            const updateSupabaseConfig = (field, value) => {
                setSupabaseConfig(prev => {
                    const next = { ...prev, [field]: value };
                    localStorage.setItem('jps_supabase_config', JSON.stringify(next));
                    return next;
                });
            };

            // STATE VARIABLES
            const [rawActuals, setRawActuals] = useState([]);
            const [rawBudget, setRawBudget] = useState([]);
            const [originalBudget, setOriginalBudget] = useState([]);
            const [isBudgetCommitted, setIsBudgetCommitted] = useState(false);
            
            const [isLoadingUrl, setIsLoadingUrl] = useState({ budget: false, actuals: false });
            const [loadError, setLoadError] = useState('');
            
            const [isPushing, setIsPushing] = useState(false);
            const [isSyncingConfigs, setIsSyncingConfigs] = useState(false);
            const [hasAutoRestored, setHasAutoRestored] = useState(false);
            const [hasAutoAllocated, setHasAutoAllocated] = useState(false);

            // Filters & State
            const [ytdMonth, setYtdMonth] = useState('All');
            const [fMonth, setFMonth] = useState('All');
            const [fYear, setFYear] = useState('All');
            const [fRC, setFRC] = useState('All');
            const [fParish, setFParish] = useState('All');
            const [fInd, setFInd] = useState('All');
            const [fCust, setFCust] = useState('All'); 

            // Configuration State
            const [monthMapping, setMonthMapping] = useState({});
            const [allocOverrides, setAllocOverrides] = useState({});
            const [accountNameMap, setAccountNameMap] = useState({}); 
            
            // Advanced Overrides Form State
            const [advOverrideDim, setAdvOverrideDim] = useState('rc');
            const [advOverrideKey, setAdvOverrideKey] = useState('');
            const [advOverrideVal, setAdvOverrideVal] = useState('');
            
            const [advOverrideCustMonth, setAdvOverrideCustMonth] = useState(1);
            const [advOverrideCustKey, setAdvOverrideCustKey] = useState('');
            const [advOverrideCustVal, setAdvOverrideCustVal] = useState('');

            const [advOverrides, setAdvOverrides] = useState({ 
                pct: { rc: {}, industry: {}, month: {} }, 
                vol: {} 
            });
            
            const [allocationResults, setAllocationResults] = useState([]);
            
            const [varianceDim, setVarianceDim] = useState('rc');
            const [drillDownDim, setDrillDownDim] = useState('name');
            const [expandedRow, setExpandedRow] = useState(null);
            const [isNormalizeHurricane, setIsNormalizeHurricane] = useState(true);

            // Exec Summary Overview State
            const [overviewScenario, setOverviewScenario] = useState('leBase');
            const [overviewComments, setOverviewComments] = useState('');

            // Pivot State & Explanations
            const [pivotScenario, setPivotScenario] = useState('leBase');
            const [moversRC, setMoversRC] = useState('All');
            const [moversTimeFrame, setMoversTimeFrame] = useState('FY'); 
            const [expandedPivotRC, setExpandedPivotRC] = useState(null);
            const [varianceComments, setVarianceComments] = useState({}); 

            // Version Manager
            const [savedVersions, setSavedVersions] = useState([]);
            const [isVersionModalOpen, setIsVersionModalOpen] = useState(false);

            const [graphToggles, setGraphToggles] = useState({
                act25: true, bud26: true, act26: true, leCust: true, leRc: true, leBase: true, leCustom: true
            });


            // --- REVENUE & TARIFF STATE ---
            const [tariffRates, setTariffRates] = useState({
                'RT10': { energy: 8.31,  custChg: 603.54,  demand: 0 },
                'RT20': { energy: 10.25, custChg: 1286.87, demand: 0 },
                'RT40': { energy: 6.91,  custChg: 9066.66, demand: 3105.57 },
                'RT50': { energy: 4.90,  custChg: 9066.66, demand: 2151.84 },
                'RT60': { energy: 14.06, custChg: 3655.91, demand: 0 },
                'RT70': { energy: 4.89,  custChg: 9066.66, demand: 2852.04 },
                'BU':   { energy: 8.31,  custChg: 603.54,  demand: 0 },
                'EV':   { energy: 10.25, custChg: 1286.87, demand: 0 },
            });
            const [fxRate, setFxRate] = useState(162);

            // --- CUSTOMER ENRICHMENT STATE ---
            // Stores manually entered data for NO HISTORY / UNALLOCATED accounts
            const [customerEnrichment, setCustomerEnrichment] = useState({});
            // { acct: { name, rc, parish, industry, kvaDemand, notes } }

            // --- RISK & SCENARIO COMPARISON STATE ---
            const [riskThreshold, setRiskThreshold] = useState(10); // % below budget = at risk


            // --- NET GEN HISTORICAL STATE (loaded from Supabase) ---
            const [netGenData, setNetGenData] = React.useState(null);
            // netGenData shape: { netGen: {2023:[],2024:[],2025:[]}, peak: {2023:[],2024:[],2025:[]}, loaded: false }

            // --- SORTING STATES (single declaration) ---
            const [monthlySort, setMonthlySort] = useState({key: null, direction: 'asc'});
            const [topSort, setTopSort] = useState({key: 'variance', direction: 'descending'});
            const [botSort, setBotSort] = useState({key: 'variance', direction: 'ascending'});
            const [varSort, setVarSort] = useState({key: 'a26', direction: 'descending'});
            const [forecastSort, setForecastSort] = useState({key: 'rc', direction: 'asc'});

            const handleSortRequest = (key, currentSort, setSortFn) => {
                let direction = 'ascending';
                if (currentSort && currentSort.key === key && currentSort.direction === 'ascending') {
                    direction = 'descending';
                }
                setSortFn({ key, direction });
            };

            // Name Conflicts Logic
            const nameConflicts = useMemo(() => {
                if(!rawActuals.length && !rawBudget.length) return [];
                const acctMap = {};
                [...rawActuals, ...rawBudget].forEach(d => {
                    const acct = (d['JPS A/c'] || 'Unassigned').trim();
                    const name = (d['Name'] || 'Unassigned').trim();
                    if(acct === 'Unassigned' || acct === 'Unallocated' || !acct || !name) return;
                    if(!acctMap[acct]) acctMap[acct] = new Set();
                    acctMap[acct].add(name);
                });
                return Object.entries(acctMap)
                    .filter(([acct, names]) => names.size > 1)
                    .map(([acct, names]) => ({ acct, names: Array.from(names) }))
                    .sort((a,b) => a.acct.localeCompare(b.acct));
            }, [rawActuals, rawBudget]);

            // 1. DATA LOAD & CLOUD SYNC METHOD (Supabase)
            const fetchCloudData = async (silent = false) => {
                const url = supabaseConfig.url.trim();
                const key = supabaseConfig.key.trim();

                if (!url || !key) {
                    if (!silent) alert("Please enter valid Supabase Project URL and Anon Key.");
                    setSupabaseStatus('disconnected');
                    return false;
                }

                if (!silent) setIsLoadingUrl({ budget: true, actuals: true });
                setSupabaseStatus('connecting');
                let loadedSomething = false;

                try {
                    const supabaseClient = window.supabase.createClient(url, key);

                    const downloadCSV = async (filename) => {
                        const { data, error } = await supabaseClient.storage.from('jps_data').download(filename);
                        if (error) { console.error(`Failed downloading ${filename}`, error); return null; }
                        if (data) return await data.text();
                        return null;
                    };

                    const actText = await downloadCSV('actuals.csv');
                    if (actText) {
                        const parsedAct = parseCSV(actText);
                        if (parsedAct.length > 0) { setRawActuals(parsedAct); loadedSomething = true; }
                        else if (!silent) alert("actuals.csv found, but empty or improperly formatted.");
                    } else if (!silent) alert("Could not find 'actuals.csv' in the Supabase 'jps_data' bucket.");

                    const budText = await downloadCSV('budget.csv');
                    if (budText) {
                        const pb = parseCSV(budText);
                        if (pb.length > 0) { setRawBudget(pb); setOriginalBudget([...pb]); loadedSomething = true; }
                        else if (!silent) alert("budget.csv found, but appears to be empty.");
                    } else if (!silent) alert("Could not find 'budget.csv' in the Supabase 'jps_data' bucket.");
                    
                    const { data: configData, error: configError } = await supabaseClient
                        .from('dashboard_state').select('payload').eq('id', 1).single();
                    
                    if (configData && configData.payload) {
                        const parsed = configData.payload;
                        if (Array.isArray(parsed)) setSavedVersions(parsed);
                        else {
                            setSavedVersions(parsed.versions || []);
                            setVarianceComments(parsed.comments || {});
                            setOverviewComments(parsed.overviewComments || '');
                            if (parsed.accountNameMap) setAccountNameMap(parsed.accountNameMap);
                        }
                    }

                    if (!silent && loadedSomething) alert("Data successfully synced from Supabase!");
                    setSupabaseStatus(loadedSomething ? 'connected' : 'error');
                    return loadedSomething;
                } catch (e) {
                    console.error("Cloud Sync Error", e);
                    if (!silent) alert("Failed to fetch from Supabase. Check your URL, Key, and ensure table/bucket exist.");
                    setSupabaseStatus('error');
                    return false;
                } finally {
                    if (!silent) setIsLoadingUrl({ budget: false, actuals: false });
                }
            };

            // 2. SILENT BOOT SEQUENCE
            useEffect(() => {
                let isMounted = true;
                const bootApp = async () => {
                    // Use embedded creds first, then localStorage
                    const savedStr = localStorage.getItem('jps_supabase_config');
                    const savedCfg = savedStr ? JSON.parse(savedStr) : null;
                    const bootCfg = (window.EMBEDDED_SUPABASE_URL && window.EMBEDDED_SUPABASE_KEY)
                        ? { url: window.EMBEDDED_SUPABASE_URL, key: window.EMBEDDED_SUPABASE_KEY }
                        : savedCfg;
                    
                    let cloudSuccess = false;

                    if (bootCfg && bootCfg.url && bootCfg.key) {
                        setSupabaseStatus('connecting');
                        try {
                            const supabaseClient = window.supabase.createClient(bootCfg.url.trim(), bootCfg.key.trim());
                            const downloadCSV = async (filename) => {
                                const { data, error } = await supabaseClient.storage.from('jps_data').download(filename);
                                if (data) return await data.text();
                                return null;
                            };

                            const actText = await downloadCSV('actuals.csv');
                            if (actText && isMounted) { setRawActuals(parseCSV(actText)); cloudSuccess = true; }

                            const budText = await downloadCSV('budget.csv');
                            if (budText && isMounted) {
                                const pb = parseCSV(budText);
                                setRawBudget(pb); setOriginalBudget([...pb]); cloudSuccess = true;
                            }

                            const { data: configData } = await supabaseClient.from('dashboard_state').select('payload').eq('id', 1).single();
                            if (configData && configData.payload && isMounted) {
                                const parsed = configData.payload;
                                if (Array.isArray(parsed)) setSavedVersions(parsed);
                                else {
                                    setSavedVersions(parsed.versions || []);
                                    setVarianceComments(parsed.comments || {});
                                    setOverviewComments(parsed.overviewComments || '');
                                    if (parsed.accountNameMap) setAccountNameMap(parsed.accountNameMap);
                                    if (parsed.customerEnrichment) setCustomerEnrichment(parsed.customerEnrichment);
                                    if (parsed.tariffRates) setTariffRates(parsed.tariffRates);
                                    if (parsed.fxRate) setFxRate(parsed.fxRate);
                                }
                            }
                            if (isMounted) setSupabaseStatus(cloudSuccess ? 'connected' : 'error');
                        } catch (e) {
                            console.log("Boot cloud fetch failed", e);
                            if (isMounted) setSupabaseStatus('error');
                        }
                    }

                    if (!cloudSuccess && isMounted) {
                        try {
                            const actRes = await fetch('./JPS%20Actuals%20data.csv');
                            if (actRes.ok) setRawActuals(parseCSV(await actRes.text()));
                            
                            const budRes = await fetch('./JPS%20Budget%202026%20data.csv');
                            if (budRes.ok) {
                                const pb = parseCSV(await budRes.text());
                                setRawBudget(pb); setOriginalBudget([...pb]);
                            }
                        } catch (e) {
                            console.log("Could not auto-load files locally.", e);
                            setLoadError("Local fetch blocked by browser. Please configure Supabase Sync or use manual file upload.");
                        }
                    }
                };

                bootApp();
                return () => { isMounted = false; };
            }, []);

            // 3. REALTIME + PRESENCE SUBSCRIPTION
            useEffect(() => {
                const url = window.EMBEDDED_SUPABASE_URL;
                const key = window.EMBEDDED_SUPABASE_KEY;
                if (!url || !key || !currentUser) return;

                const sb = window.supabase.createClient(url, key);

                // --- Presence channel: who's online ---
                const presenceCh = sb.channel('jps_presence', {
                    config: { presence: { key: userIdRef } }
                });

                presenceCh
                    .on('presence', { event: 'sync' }, () => {
                        const state = presenceCh.presenceState();
                        const users = {};
                        Object.entries(state).forEach(([uid, presences]) => {
                            const p = presences[0];
                            users[uid] = { name: p.name, color: getColor(uid), lastSeen: p.online_at };
                        });
                        setOnlineUsers(users);
                    })
                    .on('presence', { event: 'join' }, ({ key: uid, newPresences }) => {
                        const name = newPresences[0]?.name;
                        if (name && name !== currentUser) showToast(`${name} joined`, 'join');
                    })
                    .on('presence', { event: 'leave' }, ({ key: uid, leftPresences }) => {
                        const name = leftPresences[0]?.name;
                        if (name && name !== currentUser) showToast(`${name} left`, 'leave');
                    })
                    .subscribe(async (status) => {
                        if (status === 'SUBSCRIBED') {
                            await presenceCh.track({ name: currentUser, online_at: new Date().toISOString() });
                        }
                    });

                presenceChannelRef.current = presenceCh;

                // --- Realtime channel: dashboard_state changes ---
                const realtimeCh = sb.channel('jps_dashboard_state')
                    .on('postgres_changes', {
                        event: 'UPDATE',
                        schema: 'public',
                        table: 'dashboard_state',
                        filter: 'id=eq.1'
                    }, (payload) => {
                        if (!payload.new || !payload.new.payload) return;
                        const parsed = payload.new.payload;
                        setSavedVersions(parsed.versions || []);
                        setVarianceComments(parsed.comments || {});
                        setOverviewComments(parsed.overviewComments || '');
                        if (parsed.accountNameMap) setAccountNameMap(parsed.accountNameMap);
                        showToast('Dashboard updated by a teammate', 'update');
                    })
                    .subscribe();

                realtimeChannelRef.current = realtimeCh;

                return () => {
                    if (presenceChannelRef.current) sb.removeChannel(presenceChannelRef.current);
                    if (realtimeChannelRef.current) sb.removeChannel(realtimeChannelRef.current);
                };
            }, [currentUser]);


            useEffect(() => {
                if (!hasAutoRestored && originalBudget.length > 0 && rawActuals.length > 0 && savedVersions.length > 0) {
                    const defaultScenario = savedVersions.find(v => v.isDefault);
                    if (defaultScenario) {
                        setRawBudget([...originalBudget]);
                        setIsBudgetCommitted(false); 
                        setMonthMapping(defaultScenario.monthMapping || {});
                        setAllocOverrides(defaultScenario.allocOverrides || {});
                        let loadedAdv = defaultScenario.advOverrides || { pct: { rc: {}, industry: {}, month: {} }, vol: {} };
                        if (!loadedAdv.pct && !loadedAdv.vol) loadedAdv = { pct: loadedAdv, vol: {} };
                        setAdvOverrides(loadedAdv);
                        setIsNormalizeHurricane(defaultScenario.isNormalizeHurricane ?? true);
                        setHasAutoRestored(true);
                    } else {
                        setHasAutoRestored(true);
                    }
                }
            }, [originalBudget, rawActuals, savedVersions, hasAutoRestored]);


            // --- REVENUE HELPERS ---
            const getRcKey = (rc) => {
                const r = (rc || '').toUpperCase();
                if (r.startsWith('RT10')) return 'RT10';
                if (r.startsWith('RT20')) return 'RT20';
                if (r.startsWith('RT40')) return 'RT40';
                if (r.startsWith('RT50')) return 'RT50';
                if (r.startsWith('RT60')) return 'RT60';
                if (r.startsWith('RT70')) return 'RT70';
                if (r === 'BU') return 'BU';
                if (r === 'EV') return 'EV';
                return 'RT10';
            };
            const kwhToRevUSD = (kwh, rc) => {
                const key = getRcKey(rc);
                const rate = tariffRates[key] || tariffRates['RT10'];
                return (kwh * rate.energy) / fxRate;
            };
            const formatUSD = (num) => '$' + Number(num||0).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
            const formatUSDb = (num) => {
                const n = Number(num||0);
                if (Math.abs(n) >= 1000000) return '$' + (n/1000000).toFixed(2) + 'M';
                if (Math.abs(n) >= 1000) return '$' + (n/1000).toFixed(1) + 'K';
                return '$' + n.toFixed(0);
            };

            // Global Filter Logic
            const getFiltered = useCallback((data) => {
                return data.filter(d => {
                    if (fYear !== 'All' && d.year.toString() !== fYear) return false;
                    if (fMonth !== 'All' && monthNames[d.month-1] !== fMonth) return false;
                    if (fRC !== 'All' && d.rc !== fRC) return false;
                    if (fParish !== 'All' && d.parish !== fParish) return false;
                    if (fInd !== 'All' && d.industry !== fInd) return false;
                    if (fCust !== 'All' && d.name !== fCust) return false;
                    return true;
                });
            }, [fYear, fMonth, fRC, fParish, fInd, fCust]);

            // --- Engine ---
            const { actuals, budget, leCustGrowth, leRCGrowth, leBaseGrowth, leCustomGrowth, dimensions } = useMemo(() => {
                if (rawActuals.length === 0 || rawBudget.length === 0) return { actuals: [], budget: [], leCustGrowth: [], leRCGrowth: [], leBaseGrowth: [], leCustomGrowth: [], dimensions: { rcs: [], parishes: [], inds: [], years: [], customers: [] } };

                const normA = rawActuals.map(d => {
                    const acct = (d['JPS A/c'] || 'Unassigned').trim();
                    const rawName = (d['Name'] || 'Unassigned').trim();
                    return { 
                        source: d['Source'] || 'Postpaid', 
                        rc: (d['Rate category'] || 'Unassigned').trim(), 
                        parish: (d['Updated Parish'] || 'Unassigned').trim(), 
                        acct: acct, 
                        name: accountNameMap[acct] || rawName, 
                        industry: (d['Industry'] || 'Unassigned').trim(), 
                        kwh: cleanVal(d['Sum of net_kwh_billed_consump']), 
                        ...parseTimeStr(d['Month']) 
                    };
                });
                
                const normB = rawBudget.map(d => {
                    const acct = (d['JPS A/c'] || 'Unallocated').trim();
                    const rawName = (d['Name'] || 'Unallocated').trim();
                    return { 
                        source: d['Source'] || 'Budget', 
                        rc: (d['Rate category'] || 'Unassigned').trim(), 
                        parish: (d['Updated Parish'] || 'Unassigned').trim(), 
                        acct: acct, 
                        name: accountNameMap[acct] || rawName, 
                        industry: (d['Industry'] || 'Unallocated').trim(), 
                        kwh: cleanVal(d['Sum of Budget']), 
                        ...parseTimeStr(d['Month']) 
                    };
                });

                const ytd25Cust = {}; const ytd26Cust = {};
                const ytd25RC = {};   const ytd26RC = {};
                normA.filter(d => d.month <= 3).forEach(d => {
                    if (d.year === 2025) { ytd25Cust[d.acct] = (ytd25Cust[d.acct] || 0) + d.kwh; ytd25RC[d.rc] = (ytd25RC[d.rc] || 0) + d.kwh; } 
                    else if (d.year === 2026) { ytd26Cust[d.acct] = (ytd26Cust[d.acct] || 0) + d.kwh; ytd26RC[d.rc] = (ytd26RC[d.rc] || 0) + d.kwh; }
                });

                const q1Actuals26 = normA.filter(d => d.year === 2026 && d.month <= 3).map(d => ({...d, source: 'LE Forecast', type: 'Actual'}));
                const leCustData = [...q1Actuals26]; const leRCData = [...q1Actuals26]; const leBaseData = [...q1Actuals26]; const leCustomData = [...q1Actuals26];

                const bRcTotal = {}; const bCustTotal = {};
                const custMonthTotalBud = {};
                normB.filter(d => d.year === 2026 && d.month >= 4).forEach(b => {
                    bRcTotal[`${b.month}|${b.rc}`] = (bRcTotal[`${b.month}|${b.rc}`] || 0) + b.kwh;
                    bCustTotal[`${b.month}|${b.acct}`] = (bCustTotal[`${b.month}|${b.acct}`] || 0) + b.kwh;
                    const cmKey = `${b.name}|${b.month}`;
                    custMonthTotalBud[cmKey] = (custMonthTotalBud[cmKey] || 0) + b.kwh;
                });

                normB.filter(d => d.year === 2026 && d.month >= 4).forEach(b => {
                    const custMonthlyDelta = ((ytd26Cust[b.acct] || 0) - (ytd25Cust[b.acct] || 0)) / 3;
                    const rcMonthlyDelta = ((ytd26RC[b.rc] || 0) - (ytd25RC[b.rc] || 0)) / 3;
                    const rcWeight = b.kwh / (bRcTotal[`${b.month}|${b.rc}`] || 1);
                    const custWeight = b.kwh / (bCustTotal[`${b.month}|${b.acct}`] || 1);

                    const custKwh = Math.max(0, b.kwh + (custMonthlyDelta * custWeight));
                    const rcKwh = Math.max(0, b.kwh + (rcMonthlyDelta * rcWeight));

                    leCustData.push({ ...b, source: 'LE - Cust Vol Growth', type: 'Forecast', kwh: custKwh });
                    leRCData.push({ ...b, source: 'LE - RC Vol Growth', type: 'Forecast', kwh: rcKwh });
                    
                    const isCustRc = ['RT10', 'RT20', 'RT60'].includes(b.rc.toUpperCase());
                    leBaseData.push({ ...b, source: 'LE - Base', type: 'Forecast', kwh: isCustRc ? custKwh : rcKwh });

                    let customKwh = b.kwh;
                    let hasOverride = false;
                    const cmKey = `${b.name}|${b.month}`;
                    
                    if (advOverrides.vol && advOverrides.vol[b.name] && advOverrides.vol[b.name][b.month] !== undefined) {
                        const targetKwh = advOverrides.vol[b.name][b.month] * 1000000;
                        const totalBud = custMonthTotalBud[cmKey] || 1;
                        const weight = b.kwh / totalBud;
                        customKwh = targetKwh * weight;
                        hasOverride = true;
                    } else {
                        let overridePct = 0;
                        if (advOverrides.pct && advOverrides.pct.month && advOverrides.pct.month[b.month] !== undefined) {
                            overridePct = advOverrides.pct.month[b.month]; hasOverride = true;
                        } else if (advOverrides.pct && advOverrides.pct.industry && advOverrides.pct.industry[b.industry] !== undefined) {
                            overridePct = advOverrides.pct.industry[b.industry]; hasOverride = true;
                        } else if (advOverrides.pct && advOverrides.pct.rc && advOverrides.pct.rc[b.rc] !== undefined) {
                            overridePct = advOverrides.pct.rc[b.rc]; hasOverride = true;
                        }
                        if (hasOverride) customKwh = Math.max(0, b.kwh * (1 + overridePct / 100));
                    }

                    leCustomData.push({ ...b, source: 'LE - Custom', type: 'Forecast', kwh: customKwh });
                });

                const rcs = [...new Set([...normA, ...normB].map(d => d.rc))].sort((a,b) => getRcWeight(a) - getRcWeight(b));
                const parishes = [...new Set([...normA, ...normB].map(d => d.parish))].sort();
                const inds = [...new Set(normA.map(d => d.industry))].sort();
                const years = [...new Set([...normA, ...normB].map(d => d.year))].filter(y=>y>0).sort();
                const customers = [...new Set([...normA, ...normB].map(d => d.name))].filter(n => n && n !== 'Unassigned' && n !== 'Unallocated').sort();

                return { actuals: normA, budget: normB, leCustGrowth: leCustData, leRCGrowth: leRCData, leBaseGrowth: leBaseData, leCustomGrowth: leCustomData, dimensions: { rcs, parishes, inds, years, customers } };
            }, [rawActuals, rawBudget, isNormalizeHurricane, advOverrides, accountNameMap]);

            useEffect(() => {
                if (dimensions.rcs.length > 0 && !advOverrideKey) setAdvOverrideKey(dimensions.rcs[0]);
                if (dimensions.customers.length > 0 && !advOverrideCustKey) setAdvOverrideCustKey(dimensions.customers[0]);
            }, [dimensions.rcs, dimensions.customers, advOverrideKey, advOverrideCustKey]);

            useEffect(() => {
                if (rawBudget.length === 0 || isBudgetCommitted) return;
                const bMonths = [...new Set(rawBudget.map(d => d.Month))].filter(Boolean);
                const aMonths = [...new Set(rawActuals.map(d => d.Month))].filter(Boolean);
                const aQuarters = [...new Set(rawActuals.map(d => {
                    const p = parseTimeStr(d.Month);
                    return p.year > 0 ? `Q${p.qtr} ${p.year} Average` : null;
                }))].filter(Boolean);

                const getRef = (target) => aQuarters.includes(target) ? target : (aMonths.includes(target) ? target : (aQuarters.length > 0 ? aQuarters[aQuarters.length-1] : ''));
                
                if (Object.keys(monthMapping).length === 0) {
                    const newMapping = {};
                    bMonths.forEach(bm => {
                        const p = parseTimeStr(bm);
                        if (p.year === 2026 && p.qtr <= 2) newMapping[bm] = getRef('Q1 2026 Average');
                        else newMapping[bm] = getRef('Q4 2025 Average');
                    });
                    setMonthMapping(newMapping);
                }
            }, [rawBudget, rawActuals, isBudgetCommitted, monthMapping]);

            useEffect(() => {
                if (isBudgetCommitted || rawActuals.length === 0 || rawBudget.length === 0) return;
                const allResults = [];
                const bMonths = [...new Set(rawBudget.map(d=>d.Month))].filter(Boolean);
                
                bMonths.forEach(tMonth => {
                    const rMonth = monthMapping[tMonth];
                    if (!rMonth) return;

                    const tBud = rawBudget.filter(d => d.Month === tMonth);
                    const bGroups = {};
                    tBud.forEach(b => {
                        const key = `${b['Rate category'] || 'Unassigned'}|${b['Updated Parish'] || 'Unassigned'}`;
                        if (!bGroups[key]) bGroups[key] = { amount: 0 };
                        bGroups[key].amount += cleanVal(b['Sum of Budget']);
                    });
                    
                    const isQuarter = rMonth.includes('Average');
                    const filteredActs = isQuarter 
                        ? rawActuals.filter(a => {
                            const p = parseTimeStr(a.Month);
                            return `Q${p.qtr} ${p.year} Average` === rMonth;
                          })
                        : rawActuals.filter(a => a.Month === rMonth);

                    const aGroups = {};
                    filteredActs.forEach(a => {
                        const groupKey = `${a['Rate category'] || 'Unassigned'}|${a['Updated Parish'] || 'Unassigned'}`;
                        const custKey = a['JPS A/c'];
                        if (!aGroups[groupKey]) aGroups[groupKey] = { totalWeight: 0, customers: {} };
                        if (!aGroups[groupKey].customers[custKey]) {
                            aGroups[groupKey].customers[custKey] = { acct: custKey, name: a['Name'], industry: a['Industry'], weightObj: 0 };
                        }
                        const val = Math.max(0, cleanVal(a['Sum of net_kwh_billed_consump']));
                        aGroups[groupKey].customers[custKey].weightObj += val;
                        aGroups[groupKey].totalWeight += val;
                    });

                    Object.keys(bGroups).forEach(key => {
                        const [rc, parish] = key.split('|'); 
                        const totB = bGroups[key].amount; 
                        const groupData = aGroups[key];
                        
                        if (!groupData || groupData.totalWeight === 0) { 
                            allResults.push({ targetMonth: tMonth, refMonth: rMonth, rc, parish, acct: 'UNALLOCATED', name: 'NO HISTORY', industry: 'Unallocated', finalA: totB, weight: 1, override: '-' }); 
                            return; 
                        }
                        
                        Object.values(groupData.customers).forEach(c => {
                            const w = c.weightObj / groupData.totalWeight; 
                            let finalVal = totB * w; 
                            let overrideStr = '-';
                            if (allocOverrides[c.industry]) { 
                                finalVal *= (1 + (allocOverrides[c.industry] / 100)); 
                                overrideStr = `${allocOverrides[c.industry]}%`; 
                            }
                            allResults.push({ targetMonth: tMonth, refMonth: rMonth, rc, parish, acct: c.acct, name: c.name, industry: c.industry, finalA: finalVal, weight: w, override: overrideStr });
                        });
                    });
                });
                setAllocationResults(allResults);
            }, [monthMapping, allocOverrides, rawBudget, rawActuals, isBudgetCommitted]);

            const commitAllocation = useCallback(() => {
                if (allocationResults.length === 0) return;
                if (originalBudget.length === 0) setOriginalBudget([...rawBudget]);
                setRawBudget(allocationResults.map(r => ({ 'Source': 'Model Allocation', 'Rate category': r.rc, 'Updated Parish': r.parish, 'Month': r.targetMonth, 'Sum of Budget': (r.finalA || 0).toFixed(6), 'JPS A/c': r.acct, 'Name': r.name, 'Industry': r.industry })));
                setIsBudgetCommitted(true); 
            }, [allocationResults, rawBudget, originalBudget]);

            useEffect(() => {
                if (allocationResults.length > 0 && !isBudgetCommitted && rawActuals.length > 0 && rawBudget.length > 0 && !hasAutoAllocated) {
                    commitAllocation();
                    setHasAutoAllocated(true);
                }
            }, [allocationResults, isBudgetCommitted, rawActuals.length, rawBudget.length, commitAllocation, hasAutoAllocated]);

            const unlockAllocation = () => {
                if(originalBudget.length > 0) setRawBudget([...originalBudget]);
                setIsBudgetCommitted(false);
            };


            // Customer Risk Flags: accounts trending >threshold% below budget for 2+ months
            const customerRiskFlags = useMemo(() => {
                if (!isBudgetCommitted || actuals.length === 0) return {};
                const flags = {};
                const maxActMonth = Math.max(0, ...actuals.filter(a=>a.year===2026).map(a=>a.month));
                if (maxActMonth < 2) return {};

                const custBudMonths = {};
                const custActMonths = {};

                budget.filter(d=>d.year===2026 && d.month<=maxActMonth).forEach(d=>{
                    if(!custBudMonths[d.name]) custBudMonths[d.name]={};
                    custBudMonths[d.name][d.month] = (custBudMonths[d.name][d.month]||0)+d.kwh;
                });
                actuals.filter(d=>d.year===2026 && d.month<=maxActMonth).forEach(d=>{
                    if(!custActMonths[d.name]) custActMonths[d.name]={};
                    custActMonths[d.name][d.month] = (custActMonths[d.name][d.month]||0)+d.kwh;
                });

                Object.keys(custBudMonths).forEach(name=>{
                    const months = Object.keys(custBudMonths[name]).map(Number);
                    let belowCount = 0;
                    let totalBud = 0; let totalAct = 0;
                    months.forEach(m=>{
                        const b = custBudMonths[name][m]||0;
                        const a = (custActMonths[name]||{})[m]||0;
                        totalBud+=b; totalAct+=a;
                        if (b>0 && ((b-a)/b*100) > riskThreshold) belowCount++;
                    });
                    const ytdPct = totalBud>0?(totalAct-totalBud)/totalBud*100:0;
                    if (belowCount >= 2) flags[name] = { level: belowCount >= 3 ? 'red' : 'amber', belowCount, ytdPct: ytdPct.toFixed(1) };
                    else if (ytdPct < -(riskThreshold/2)) flags[name] = { level: 'watch', belowCount, ytdPct: ytdPct.toFixed(1) };
                });
                return flags;
            }, [isBudgetCommitted, actuals, budget, riskThreshold]);

            const pivotState = useMemo(() => {
                if (activeTab !== 'pivot' || actuals.length === 0) return { rcMatrix: {}, topMovers: [], bottomMovers: [] };

                const ytdLimit = ytdMonth === 'All' ? 12 : monthMap[ytdMonth];
                let targetDataset = [];
                const maxActMonth26 = Math.max(0, ...actuals.filter(a=>a.year===2026).map(a=>a.month));
                
                const fActuals = getFiltered(actuals);
                const fBudget = getFiltered(budget);

                if (pivotScenario === 'budgetCombined') {
                    targetDataset = [
                        ...fActuals.filter(a => a.year === 2026 && a.month <= maxActMonth26).map(a => ({...a, source: 'Actual'})),
                        ...fBudget.filter(b => b.year === 2026 && b.month > maxActMonth26).map(b => ({...b, source: 'Budget'}))
                    ];
                } else {
                    const mappedScenario = pivotScenario === 'leCust' ? leCustGrowth :
                                           pivotScenario === 'leRC' ? leRCGrowth :
                                           pivotScenario === 'leBase' ? leBaseGrowth :
                                           leCustomGrowth;
                    targetDataset = getFiltered(mappedScenario).filter(d=>d.year===2026);
                }

                const rcMatrix = {};
                targetDataset.forEach(d => {
                    const rc = d.rc || 'Unassigned';
                    let acctName = d.name || d.acct || 'Unknown';
                    if (['RT10', 'RT20', 'EV', 'BU'].includes(rc.toUpperCase())) acctName = '';

                    const m = d.month;
                    const val = d.kwh / 1000000;

                    if (!rcMatrix[rc]) rcMatrix[rc] = { total: 0, months: Array(12).fill(0), customers: {} };
                    rcMatrix[rc].total += val;
                    if (m >= 1 && m <= 12) rcMatrix[rc].months[m - 1] += val;

                    if (!rcMatrix[rc].customers[acctName]) rcMatrix[rc].customers[acctName] = { total: 0, months: Array(12).fill(0) };
                    rcMatrix[rc].customers[acctName].total += val;
                    if (m >= 1 && m <= 12) rcMatrix[rc].customers[acctName].months[m - 1] += val;
                });

                const accVar = {};
                fActuals.filter(a => a.year === 2025).forEach(a => {
                    if (moversTimeFrame === 'YTD' && a.month > ytdLimit) return;
                    if (moversTimeFrame === 'MTD' && a.month !== ytdLimit) return;
                    const rc = a.rc || 'Unassigned';
                    let acct = a.name || a.acct || 'Unknown';
                    if (['RT10', 'RT20', 'EV', 'BU'].includes(rc.toUpperCase())) return;
                    const val = a.kwh / 1000000;
                    if (!accVar[acct]) accVar[acct] = { name: acct, rc, baseline: 0, target: 0 };
                    accVar[acct].baseline += val;
                });

                targetDataset.forEach(d => {
                    if (moversTimeFrame === 'YTD' && d.month > ytdLimit) return;
                    if (moversTimeFrame === 'MTD' && d.month !== ytdLimit) return;
                    const rc = d.rc || 'Unassigned';
                    let acct = d.name || d.acct || 'Unknown';
                    if (['RT10', 'RT20', 'EV', 'BU'].includes(rc.toUpperCase())) return;
                    const val = d.kwh / 1000000;
                    if (!accVar[acct]) accVar[acct] = { name: acct, rc, baseline: 0, target: 0 };
                    accVar[acct].target += val;
                });

                const variances = Object.values(accVar).map(v => {
                    const variance = v.target - v.baseline;
                    const pct = v.baseline > 0 ? (variance / v.baseline) * 100 : (v.target > 0 ? 100 : 0);
                    return { ...v, variance, pct };
                }).filter(v => moversRC === 'All' || v.rc === moversRC);

                const topMovers = [...variances].sort((a,b) => b.variance - a.variance).filter(v => v.variance > 0).slice(0, 10);
                const bottomMovers = [...variances].sort((a,b) => a.variance - b.variance).filter(v => v.variance < 0).slice(0, 10);

                return { rcMatrix, topMovers, bottomMovers };
            }, [activeTab, pivotScenario, moversRC, actuals, budget, leCustGrowth, leRCGrowth, leBaseGrowth, leCustomGrowth, moversTimeFrame, ytdMonth, getFiltered]);

            const pushScenariosToCloud = async (versionsOverride = null, commentsOverride = null, overviewCmtOverride = null, accountNameMapOverride = null, customerEnrichmentOverride = null) => {
                const versionsToPush = versionsOverride || savedVersions;
                const commentsToPush = commentsOverride || varianceComments;
                const ocToPush = overviewCmtOverride !== null ? overviewCmtOverride : overviewComments;
                const mapToPush = accountNameMapOverride || accountNameMap;
                const enrichToPush = customerEnrichmentOverride || customerEnrichment;
                
                const url = supabaseConfig.url.trim();
                const key = supabaseConfig.key.trim();
                if (!url || !key) return;

                setIsSyncingConfigs(true);
                try {
                    const payloadToSave = {
                        versions: versionsToPush.map(v => ({
                            id: v.id, name: v.name, timestamp: v.timestamp,
                            isNormalizeHurricane: v.isNormalizeHurricane,
                            allocOverrides: v.allocOverrides, advOverrides: v.advOverrides,
                            monthMapping: v.monthMapping, isDefault: v.isDefault || false
                        })),
                        comments: commentsToPush,
                        overviewComments: ocToPush,
                        accountNameMap: mapToPush,
                        customerEnrichment: enrichToPush,
                        tariffRates: tariffRates,
                        fxRate: fxRate
                    };

                    const supabaseClient = window.supabase.createClient(url, key);
                    const { error } = await supabaseClient.from('dashboard_state').upsert({ id: 1, payload: payloadToSave });
                    if (error) throw error;
                    setSupabaseStatus('connected');
                } catch (error) {
                    console.error("Silent sync failed", error);
                    alert("Failed to sync to Supabase: " + error.message);
                    setSupabaseStatus('error');
                } finally {
                    setIsSyncingConfigs(false);
                }
            };

            // FIX: pullScenariosFromCloud was referenced in modal but never defined
            const pullScenariosFromCloud = async () => {
                const url = supabaseConfig.url.trim();
                const key = supabaseConfig.key.trim();
                if (!url || !key) { alert("Configure Supabase credentials in the Data Hub first."); return; }
                setIsSyncingConfigs(true);
                try {
                    const supabaseClient = window.supabase.createClient(url, key);
                    const { data: configData, error } = await supabaseClient
                        .from('dashboard_state').select('payload').eq('id', 1).single();
                    if (error) throw error;
                    if (configData && configData.payload) {
                        const parsed = configData.payload;
                        if (Array.isArray(parsed)) setSavedVersions(parsed);
                        else {
                            setSavedVersions(parsed.versions || []);
                            setVarianceComments(parsed.comments || {});
                            setOverviewComments(parsed.overviewComments || '');
                            if (parsed.accountNameMap) setAccountNameMap(parsed.accountNameMap);
                            if (parsed.customerEnrichment) setCustomerEnrichment(parsed.customerEnrichment);
                            if (parsed.tariffRates) setTariffRates(parsed.tariffRates);
                            if (parsed.fxRate) setFxRate(parsed.fxRate);
                        }
                        alert("Scenarios pulled from cloud successfully!");
                    } else {
                        alert("No saved config found in Supabase.");
                    }
                } catch(e) {
                    console.error("Pull failed", e);
                    alert("Pull failed: " + e.message);
                } finally {
                    setIsSyncingConfigs(false);
                }
            };

            const handleAddComment = (companyName) => {
                const commentKey = `${pivotScenario}|${moversTimeFrame}|${companyName}`;
                const currentVal = varianceComments[commentKey] || '';
                const newVal = prompt(`Explain the variance for ${companyName} (${moversTimeFrame} vs 2025):`, currentVal);
                if (newVal !== null) {
                    const updatedComments = { ...varianceComments, [commentKey]: newVal };
                    setVarianceComments(updatedComments);
                    if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(savedVersions, updatedComments);
                }
            };

            const fetchCloudDataFromButton = async () => { await fetchCloudData(false); };

            // --- Handlers ---
            const handleFileUpload = (e, isBudget) => {
                const reader = new FileReader();
                reader.onload = (evt) => { 
                    const data = parseCSV(evt.target.result); 
                    if(isBudget) { setRawBudget(data); setOriginalBudget([...data]); setIsBudgetCommitted(false); } 
                    else { setRawActuals(data); } 
                };
                reader.readAsText(e.target.files[0]);
            };

            const handleFetchUrl = async (url, isBudget) => {
                if(!url) return;
                setIsLoadingUrl(p => ({...p, [isBudget ? 'budget' : 'actuals']: true}));
                try {
                    const response = await fetch(url);
                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                    const text = await response.text();
                    const data = parseCSV(text);
                    if (isBudget) { setRawBudget(data); setOriginalBudget([...data]); setIsBudgetCommitted(false); } 
                    else { setRawActuals(data); }
                } catch (e) {
                    alert('Error fetching file: ' + e.message);
                } finally {
                    setIsLoadingUrl(p => ({...p, [isBudget ? 'budget' : 'actuals']: false}));
                }
            };

            const handleSaveVersion = () => {
                const name = prompt("Enter a name for this scenario version:");
                if (!name) return;
                const isDefault = savedVersions.length === 0;
                const newVersion = { 
                    id: Date.now(), name, timestamp: new Date().toLocaleString(), isDefault,
                    savedBy: currentUser || 'Unknown',
                    monthMapping: { ...monthMapping }, allocOverrides: { ...allocOverrides }, 
                    advOverrides: { ...advOverrides }, isNormalizeHurricane 
                };
                const updatedVersions = [...savedVersions, newVersion];
                setSavedVersions(updatedVersions);
                if (supabaseConfig.url && supabaseConfig.key) {
                    pushScenariosToCloud(updatedVersions, varianceComments);
                    showToast(`Scenario "${name}" saved by ${currentUser || 'you'}`, 'update');
                } else {
                    showToast(`Scenario "${name}" saved locally`, 'info');
                }
            };

            const handleRestoreVersion = (version) => {
                if (originalBudget.length > 0) setRawBudget([...originalBudget]);
                setIsBudgetCommitted(false); 
                setMonthMapping(version.monthMapping || {}); 
                setAllocOverrides(version.allocOverrides || {}); 
                let loadedAdv = version.advOverrides || { pct: { rc: {}, industry: {}, month: {} }, vol: {} };
                if (!loadedAdv.pct && !loadedAdv.vol) loadedAdv = { pct: loadedAdv, vol: {} };
                setAdvOverrides(loadedAdv); 
                setIsNormalizeHurricane(version.isNormalizeHurricane ?? true); 
                setIsVersionModalOpen(false);
            };

            const handleDeleteVersion = (id) => {
                if(!confirm("Delete this saved version?")) return;
                const updatedVersions = savedVersions.filter(v => v.id !== id);
                setSavedVersions(updatedVersions);
                if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(updatedVersions, varianceComments);
            };

            const handleSetDefaultVersion = async (id) => {
                const updatedVersions = savedVersions.map(v => ({ ...v, isDefault: v.id === id }));
                setSavedVersions(updatedVersions);
                if (supabaseConfig.url && supabaseConfig.key) {
                    await pushScenariosToCloud(updatedVersions, varianceComments);
                    alert("Default scenario changed and pushed to cloud.");
                } else {
                    alert("Default scenario set locally. Configure Supabase to push this setting.");
                }
            };

            const handleClearData = () => {
                if(!confirm("Are you sure you want to clear all data and reset the engine?")) return;
                setRawActuals([]); setRawBudget([]); setOriginalBudget([]);
                setIsBudgetCommitted(false); setLoadError('');
                setMonthMapping({}); setAllocOverrides({});
                setAdvOverrides({ pct: { rc: {}, industry: {}, month: {} }, vol: {} });
                setAllocationResults([]); setSavedVersions([]);
                setHasAutoRestored(false); setHasAutoAllocated(false);
                setActiveTab('data');
            };

            const monthlyAggregatesRaw = useMemo(() => {
                if (actuals.length === 0) return [];
                const fAct = getFiltered(actuals); const fBud = getFiltered(budget); 
                const fLeCust = getFiltered(leCustGrowth); const fLeRC = getFiltered(leRCGrowth); 
                const fLeBase = getFiltered(leBaseGrowth); const fLeCustom = getFiltered(leCustomGrowth);
                return monthNames.map((m, idx) => {
                    const mNum = idx + 1;
                    const a25 = fAct.filter(d => d.year === 2025 && d.month === mNum).reduce((s,d)=>s+d.kwh,0);
                    const b26 = fBud.filter(d => d.year === 2026 && d.month === mNum).reduce((s,d)=>s+d.kwh,0);
                    const a26 = fAct.filter(d => d.year === 2026 && d.month === mNum).reduce((s,d)=>s+d.kwh,0);
                    const leCust26 = fLeCust.filter(d => d.year === 2026 && d.month === mNum).reduce((s,d)=>s+d.kwh,0);
                    const leRC26 = fLeRC.filter(d => d.year === 2026 && d.month === mNum).reduce((s,d)=>s+d.kwh,0);
                    const leBase26 = fLeBase.filter(d => d.year === 2026 && d.month === mNum).reduce((s,d)=>s+d.kwh,0);
                    const leCustom26 = fLeCustom.filter(d => d.year === 2026 && d.month === mNum).reduce((s,d)=>s+d.kwh,0);
                    // Revenue (US$) per scenario
                    const revAct25 = fAct.filter(d => d.year === 2025 && d.month === mNum).reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0);
                    const revBud26 = fBud.filter(d => d.year === 2026 && d.month === mNum).reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0);
                    const revAct26 = fAct.filter(d => d.year === 2026 && d.month === mNum).reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0);
                    const revBase26 = fLeBase.filter(d => d.year === 2026 && d.month === mNum).reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0);
                    return { monthFull: m, month: m.substring(0,3), Act25: a25, Bud26: b26, Act26: a26 > 0 ? a26 : null, LeCust: leCust26, LeRC: leRC26, LeBase: leBase26, LeCustom: leCustom26, RevAct25: revAct25, RevBud26: revBud26, RevAct26: revAct26 > 0 ? revAct26 : null, RevBase26: revBase26 };
                });
            }, [actuals, budget, leCustGrowth, leRCGrowth, leBaseGrowth, leCustomGrowth, getFiltered]);

            // --- UI Components ---
            const varScenarios = [
                { key: 'LeCust', label: 'LE Cust Vol', bg: 'bg-purple-50', text: 'text-purple-600', headBg: 'bg-purple-100', headText: 'text-purple-800', lightBg: 'bg-purple-50/20' },
                { key: 'LeRC', label: 'LE RC Vol', bg: 'bg-blue-50', text: 'text-blue-600', headBg: 'bg-blue-100', headText: 'text-blue-800', lightBg: 'bg-blue-50/20' },
                { key: 'LeBase', label: 'LE Base', bg: 'bg-orange-50', text: 'text-orange-600', headBg: 'bg-orange-100', headText: 'text-orange-800', lightBg: 'bg-orange-50/20' },
                { key: 'LeCustom', label: 'LE Advanced', bg: 'bg-indigo-50', text: 'text-indigo-600', headBg: 'bg-indigo-100', headText: 'text-indigo-800', lightBg: 'bg-indigo-50/20' }
            ];

            // FIX: toggleConfig was referenced in renderGraphToggles but never defined
            const toggleConfig = [
                { key: 'act25', label: '2025 Actuals', activeClass: 'bg-slate-200 text-slate-700 border-slate-400', inactiveClass: 'bg-white text-slate-400 border-slate-200' },
                { key: 'bud26', label: '2026 Budget', activeClass: 'bg-blue-100 text-blue-700 border-blue-300', inactiveClass: 'bg-white text-slate-400 border-slate-200' },
                { key: 'act26', label: '2026 Actuals', activeClass: 'bg-purple-100 text-purple-700 border-purple-300', inactiveClass: 'bg-white text-slate-400 border-slate-200' },
                { key: 'leCust', label: 'LE Cust Vol', activeClass: 'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-300', inactiveClass: 'bg-white text-slate-400 border-slate-200' },
                { key: 'leRc', label: 'LE RC Vol', activeClass: 'bg-sky-100 text-sky-700 border-sky-300', inactiveClass: 'bg-white text-slate-400 border-slate-200' },
                { key: 'leBase', label: 'LE Base', activeClass: 'bg-amber-100 text-amber-700 border-amber-300', inactiveClass: 'bg-white text-slate-400 border-slate-200' },
                { key: 'leCustom', label: 'LE Advanced', activeClass: 'bg-indigo-100 text-indigo-700 border-indigo-300', inactiveClass: 'bg-white text-slate-400 border-slate-200' },
            ];

            const renderEmptyBudgetWarning = () => (
                <div className="flex flex-col items-center justify-center h-full text-slate-500 py-20">
                    <div className="text-slate-300 mb-4"><Icons.Calculator /></div>
                    <h2 className="text-xl font-bold text-slate-700 mb-2">Budget Not Committed</h2>
                    <p className="text-sm mb-6 max-w-md text-center">To view this forecast, you must first commit the granular budget in the Allocation Engine.</p>
                    <button onClick={() => setActiveTab('allocation')} className="bg-orange-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-orange-700 transition">Go to Engine</button>
                </div>
            );

            const renderGraphToggles = () => (
                <div className="flex flex-wrap items-center gap-3 mb-4 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1 ml-2"><Icons.Eye /> Map Scenarios:</span>
                    {toggleConfig.map(t => (
                        <label key={t.key} className={`cursor-pointer px-3 py-1.5 rounded-md border text-xs font-bold flex items-center gap-2 transition select-none shadow-sm ${graphToggles[t.key] ? t.activeClass : t.inactiveClass}`}>
                            <input type="checkbox" className="hidden" checked={graphToggles[t.key]} onChange={() => setGraphToggles(p => ({...p, [t.key]: !p[t.key]}))} />
                            <div className={`w-2 h-2 rounded-full ${graphToggles[t.key] ? 'bg-current shadow-sm' : 'bg-slate-300'}`}></div>
                            {t.label}
                        </label>
                    ))}
                    <div className="flex gap-2 ml-auto pr-2">
                        <button className="text-[10px] uppercase tracking-wider font-bold text-slate-500 hover:text-blue-600 transition" onClick={() => setGraphToggles({act25:true, bud26:true, act26:true, leCust:true, leRc:true, leBase:true, leCustom:true})}>All On</button>
                        <button className="text-[10px] uppercase tracking-wider font-bold text-slate-500 hover:text-red-500 transition" onClick={() => setGraphToggles({act25:false, bud26:false, act26:false, leCust:false, leRc:false, leBase:false, leCustom:false})}>All Off</button>
                    </div>
                </div>
            );

            const renderAdvOverridesUI = () => {
                const dimLabels = { rc: 'Rate Class', industry: 'Industry', month: 'Month' };
                const dimOptions = {
                    rc: dimensions.rcs,
                    industry: dimensions.inds,
                    month: [1,2,3,4,5,6,7,8,9,10,11,12].map(m => ({ val: m, label: monthNames[m-1] }))
                };

                const handleAddPct = () => {
                    if(advOverrideKey && advOverrideVal) {
                        setAdvOverrides(p => ({ ...p, pct: { ...p.pct, [advOverrideDim]: { ...(p.pct[advOverrideDim] || {}), [advOverrideKey]: parseFloat(advOverrideVal) } } }));
                        setAdvOverrideVal('');
                    }
                };

                const handleAddVol = () => {
                    if(advOverrideCustKey && advOverrideCustMonth && advOverrideCustVal) {
                        setAdvOverrides(p => ({ ...p, vol: { ...p.vol, [advOverrideCustKey]: { ...(p.vol[advOverrideCustKey] || {}), [advOverrideCustMonth]: parseFloat(advOverrideCustVal) } } }));
                        setAdvOverrideCustVal('');
                    }
                };

                const handleRemovePct = (dim, key) => {
                    setAdvOverrides(p => {
                        const next = { ...p, pct: {...p.pct} };
                        const nextDim = { ...next.pct[dim] };
                        delete nextDim[key];
                        next.pct[dim] = nextDim;
                        return next;
                    });
                };

                const handleRemoveVol = (cust, month) => {
                    setAdvOverrides(p => {
                        const next = { ...p, vol: {...p.vol} };
                        const nextCust = { ...next.vol[cust] };
                        delete nextCust[month];
                        if (Object.keys(nextCust).length === 0) delete next.vol[cust];
                        else next.vol[cust] = nextCust;
                        return next;
                    });
                };

                return (
                    <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100 shadow-sm mb-6 space-y-6">
                        <div>
                            <h4 className="font-bold flex items-center gap-2 text-indigo-800 text-lg"><Icons.Sliders /> LE: Advanced Scenario Builder</h4>
                            <p className="text-xs text-slate-500 mt-1"><strong>Rules are prioritized: Customer Volumetric &gt; Month % &gt; Industry % &gt; Rate Class %.</strong></p>
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                            <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-sm">
                                <h5 className="font-bold text-sm text-slate-700 mb-3 flex items-center gap-2"><span className="w-5 h-5 rounded bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-black">%</span> Percentage Adjustments</h5>
                                <div className="flex flex-wrap gap-2 mb-4 items-center">
                                    <select value={advOverrideDim} onChange={e => { setAdvOverrideDim(e.target.value); setAdvOverrideKey(e.target.value === 'month' ? 1 : dimOptions[e.target.value][0]); }} className="border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 font-bold text-slate-700 bg-slate-50">
                                        {Object.entries(dimLabels).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                                    </select>
                                    <span className="text-slate-300">➜</span>
                                    <select value={advOverrideKey} onChange={e => setAdvOverrideKey(e.target.value)} className="flex-1 min-w-[120px] border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 font-medium bg-slate-50">
                                        {advOverrideDim === 'month' 
                                            ? dimOptions.month.map(m => <option key={m.val} value={m.val}>{m.label}</option>)
                                            : dimOptions[advOverrideDim].map(o => <option key={o} value={o}>{o}</option>)
                                        }
                                    </select>
                                    <input type="number" value={advOverrideVal} onChange={e => setAdvOverrideVal(e.target.value)} placeholder="+5" className="w-20 border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 text-center font-bold" />
                                    <button onClick={handleAddPct} className="bg-indigo-600 text-white px-3 py-1.5 rounded text-sm font-bold hover:bg-indigo-700 transition">Add</button>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl border border-indigo-100 shadow-sm">
                                <h5 className="font-bold text-sm text-slate-700 mb-3 flex items-center gap-2"><span className="w-5 h-5 rounded bg-fuchsia-100 text-fuchsia-700 flex items-center justify-center"><Icons.Users /></span> Customer Monthly Volume (GWh)</h5>
                                <div className="flex flex-wrap gap-2 mb-4 items-center">
                                    <select value={advOverrideCustKey} onChange={e => setAdvOverrideCustKey(e.target.value)} className="flex-1 min-w-[120px] border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 font-medium bg-slate-50 truncate">
                                        {dimensions.customers.map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                    <select value={advOverrideCustMonth} onChange={e => setAdvOverrideCustMonth(e.target.value)} className="border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 font-medium bg-slate-50">
                                        {dimOptions.month.map(m => <option key={m.val} value={m.val}>{m.label.substring(0,3)}</option>)}
                                    </select>
                                    <input type="number" value={advOverrideCustVal} onChange={e => setAdvOverrideCustVal(e.target.value)} placeholder="GWh" className="w-20 border border-slate-300 rounded px-2 py-1.5 text-sm outline-none focus:border-indigo-400 text-center font-bold" />
                                    <button onClick={handleAddVol} className="bg-fuchsia-600 text-white px-3 py-1.5 rounded text-sm font-bold hover:bg-fuchsia-700 transition">Add</button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white p-4 rounded-xl border border-slate-200">
                            <h5 className="font-bold text-sm text-slate-700 mb-3">Active Adjustments Summary</h5>
                            <div className="overflow-auto max-h-48 custom-scroll border rounded-lg">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-slate-50 sticky top-0">
                                        <tr>
                                            <th className="p-2 border-b">Rule Type</th>
                                            <th className="p-2 border-b">Target</th>
                                            <th className="p-2 border-b">Adjustment</th>
                                            <th className="p-2 border-b w-10"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {['rc', 'industry', 'month'].map(dim => Object.entries(advOverrides.pct[dim] || {}).map(([k, val]) => (
                                            <tr key={`pct-${dim}-${k}`} className="border-b hover:bg-slate-50">
                                                <td className="p-2 text-indigo-600 font-bold text-xs uppercase">{dimLabels[dim]} (%)</td>
                                                <td className="p-2 text-slate-700">{dim === 'month' ? monthNames[parseInt(k)-1] : k}</td>
                                                <td className={`p-2 font-black ${val>=0?'text-emerald-600':'text-red-500'}`}>{val > 0 ? '+'+val : val}%</td>
                                                <td className="p-2 text-center"><button onClick={() => handleRemovePct(dim, k)} className="text-slate-300 hover:text-red-500"><Icons.X /></button></td>
                                            </tr>
                                        )))}
                                        {Object.entries(advOverrides.vol || {}).map(([cust, mMap]) => Object.entries(mMap).map(([m, val]) => (
                                            <tr key={`vol-${cust}-${m}`} className="border-b hover:bg-slate-50">
                                                <td className="p-2 text-fuchsia-600 font-bold text-xs uppercase">Customer (Vol)</td>
                                                <td className="p-2 text-slate-700">{cust} <span className="text-slate-400">({monthNames[parseInt(m)-1].substring(0,3)})</span></td>
                                                <td className="p-2 font-black text-blue-600">{val} GWh</td>
                                                <td className="p-2 text-center"><button onClick={() => handleRemoveVol(cust, m)} className="text-slate-300 hover:text-red-500"><Icons.X /></button></td>
                                            </tr>
                                        )))}
                                        {(!Object.values(advOverrides.pct).some(obj => Object.keys(obj).length > 0) && Object.keys(advOverrides.vol || {}).length === 0) && (
                                            <tr><td colSpan="4" className="p-4 text-center text-slate-400 italic">No active rules applied.</td></tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            };

            // --- TABS ---
            const renderDataTab = () => (
                <div className="p-8 max-w-5xl mx-auto space-y-6">
                    <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 text-left shadow-sm text-white">
                        <h3 className="font-bold mb-4 flex items-center gap-2"><Icons.CloudUp /> Supabase Integration & API Config</h3>
                        {window.EMBEDDED_SUPABASE_URL && window.EMBEDDED_SUPABASE_KEY ? (
                            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4 mb-4 flex items-start gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 mt-1 shrink-0 animate-pulse"></span>
                                <div>
                                    <p className="text-sm font-bold text-emerald-400">Credentials Embedded in File</p>
                                    <p className="text-xs text-slate-400 mt-1">This file has hardcoded Supabase credentials. Anyone you share it with will auto-connect on load — no setup needed. To change credentials, update <code className="text-amber-400">window.EMBEDDED_SUPABASE_URL</code> and <code className="text-amber-400">window.EMBEDDED_SUPABASE_KEY</code> at the top of the script.</p>
                                </div>
                            </div>
                        ) : (
                            <p className="text-xs text-slate-400 mb-4 max-w-3xl">Enter your Supabase Project URL and Anon Key to automatically fetch data and sync scenarios. <strong>Credentials saved in browser localStorage.</strong> To bake them into the file for colleagues, set <code className="text-amber-400">window.EMBEDDED_SUPABASE_URL</code> and <code className="text-amber-400">window.EMBEDDED_SUPABASE_KEY</code> at the top of the script.</p>
                        )}
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-xs font-bold text-slate-400 uppercase">Status:</span>
                            <div className={`text-xs px-2 py-1 rounded font-bold flex items-center gap-1 ${supabaseStatus === 'connected' ? 'bg-emerald-500/20 text-emerald-400' : supabaseStatus === 'error' ? 'bg-red-500/20 text-red-400' : supabaseStatus === 'connecting' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-700 text-slate-400'}`}>
                                <span className={`w-2 h-2 rounded-full ${supabaseStatus === 'connected' ? 'bg-emerald-400' : supabaseStatus === 'error' ? 'bg-red-400' : supabaseStatus === 'connecting' ? 'bg-amber-400 animate-pulse' : 'bg-slate-400'}`}></span>
                                {supabaseStatus === 'connected' ? 'Connected & Synced' : supabaseStatus === 'error' ? 'Connection Error' : supabaseStatus === 'connecting' ? 'Connecting...' : 'Disconnected'}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Supabase Project URL {window.EMBEDDED_SUPABASE_URL && <span className="text-emerald-400">(embedded)</span>}</label>
                                <input type="text" value={supabaseConfig.url} onChange={e=>updateSupabaseConfig('url', e.target.value)} readOnly={!!(window.EMBEDDED_SUPABASE_URL && window.EMBEDDED_SUPABASE_KEY)} className={`w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm outline-none focus:border-blue-500 ${window.EMBEDDED_SUPABASE_URL ? 'opacity-60 cursor-not-allowed' : ''}`} placeholder="https://xyz.supabase.co" />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Supabase Anon Key {window.EMBEDDED_SUPABASE_KEY && <span className="text-emerald-400">(embedded)</span>}</label>
                                <input type="password" value={supabaseConfig.key} onChange={e=>updateSupabaseConfig('key', e.target.value)} readOnly={!!(window.EMBEDDED_SUPABASE_URL && window.EMBEDDED_SUPABASE_KEY)} className={`w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-sm outline-none focus:border-blue-500 ${window.EMBEDDED_SUPABASE_KEY ? 'opacity-60 cursor-not-allowed' : ''}`} placeholder="eyJh..." />
                            </div>
                        </div>
                        <button onClick={fetchCloudDataFromButton} disabled={isLoadingUrl.actuals} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-bold shadow-sm transition disabled:opacity-50 flex items-center gap-2">
                            <Icons.RefreshCw /> {isLoadingUrl.actuals ? 'Syncing...' : 'Sync All Data & Configs from Supabase'}
                        </button>
                    </div>

                    <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200 text-center">
                        <div className="flex justify-center mb-4 text-blue-500"><Icons.Database /></div>
                        <h2 className="text-3xl font-bold text-slate-800 mb-3">Load Data Manually</h2>
                        <p className="text-slate-500 mb-2 max-w-lg mx-auto">Upload local files if not using the Supabase connection above.</p>
                        
                        {loadError && <p className="text-xs text-red-600 font-bold mb-8 bg-red-50 py-1.5 px-4 rounded-full inline-block border border-red-200">{loadError}</p>}
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 text-left mt-8">
                            <div className="bg-blue-50/30 p-6 rounded-xl border border-blue-100 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Icons.Activity /> 1. High-Level Budget</h3>
                                    <p className="text-xs text-slate-500 mb-4">Required format: JPS Budget 2026 data.csv</p>
                                    <input type="file" accept=".csv" onChange={e => handleFileUpload(e, true)} className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer w-full text-slate-600 mb-4" />
                                </div>
                            </div>
                            <div className="bg-purple-50/30 p-6 rounded-xl border border-purple-100 flex flex-col justify-between">
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-2 flex items-center gap-2"><Icons.Database /> 2. Detailed Actuals</h3>
                                    <p className="text-xs text-slate-500 mb-4">Required format: JPS Actuals data.csv</p>
                                    <input type="file" accept=".csv" onChange={e => handleFileUpload(e, false)} className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-purple-600 file:text-white hover:file:bg-purple-700 cursor-pointer w-full text-slate-600 mb-4" />
                                </div>
                            </div>
                        </div>

                        {nameConflicts.length > 0 && (
                            <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 mt-6 text-left">
                                <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2"><Icons.Users /> Account Name Conflicts Detected</h3>
                                <p className="text-xs text-amber-700 mb-4">Same Account Number found with different names. Select primary name for forecasting.</p>
                                <div className="max-h-60 overflow-y-auto custom-scroll space-y-2">
                                    {nameConflicts.map(conflict => (
                                        <div key={conflict.acct} className="flex flex-col md:flex-row md:items-center gap-4 bg-white p-3 rounded shadow-sm border border-amber-100">
                                            <div className="text-sm font-bold text-slate-700 w-32 shrink-0">A/C: {conflict.acct}</div>
                                            <div className="flex-1 flex gap-2 flex-wrap">
                                                {conflict.names.map(n => (
                                                    <button key={n} onClick={() => {
                                                        const updatedMap = {...accountNameMap, [conflict.acct]: n};
                                                        setAccountNameMap(updatedMap);
                                                        if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(savedVersions, varianceComments, overviewComments, updatedMap);
                                                    }} className={`px-3 py-1 rounded text-xs font-medium border ${accountNameMap[conflict.acct] === n ? 'bg-amber-500 text-white border-amber-600' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}>{n}</button>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs text-slate-400">Custom:</span>
                                                <input type="text" placeholder="Type name..." className="border rounded px-2 py-1 text-xs outline-none focus:border-amber-400" 
                                                    onBlur={e => { 
                                                        if(e.target.value) {
                                                            const updatedMap = {...accountNameMap, [conflict.acct]: e.target.value};
                                                            setAccountNameMap(updatedMap);
                                                            if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(savedVersions, varianceComments, overviewComments, updatedMap);
                                                        }
                                                    }} 
                                                    defaultValue={accountNameMap[conflict.acct] && !conflict.names.includes(accountNameMap[conflict.acct]) ? accountNameMap[conflict.acct] : ''}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex items-center justify-center gap-4 border-t border-slate-100 pt-8 mt-8">
                            <label className="flex items-center gap-3 cursor-pointer group bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-blue-300 transition w-full max-w-lg">
                                <input type="checkbox" checked={isNormalizeHurricane} onChange={e => setIsNormalizeHurricane(e.target.checked)} className="w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
                                <div className="text-left">
                                    <span className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition">Enable Hurricane Normalization (2025 History)</span>
                                    <p className="text-[10px] text-slate-500 mt-0.5">Grosses up Oct-Dec 2025 volumes for true business-as-usual seasonality.</p>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            );

            const renderOverviewTab = () => {
                const activeLeData =
                    overviewScenario === 'leCust' ? leCustGrowth :
                    overviewScenario === 'leRC' ? leRCGrowth :
                    overviewScenario === 'leBase' ? leBaseGrowth :
                    leCustomGrowth; 

                const maxActMonth26 = Math.max(0, ...actuals.filter(a=>a.year===2026).map(a=>a.month));
                const projData = [
                    ...actuals.filter(a => a.year === 2026 && a.month <= maxActMonth26).map(d=>({...d, combinedType: 'Actual'})),
                    ...activeLeData.filter(d => d.year === 2026 && d.month > maxActMonth26).map(d=>({...d, combinedType: 'Forecast'}))
                ];

                const fProj = getFiltered(projData);
                const fAct25 = getFiltered(actuals).filter(d => d.year === 2025);
                const fBud26 = getFiltered(budget).filter(d => d.year === 2026);

                const totProj = fProj.reduce((s,d)=>s+d.kwh,0);
                const totBud = fBud26.reduce((s,d)=>s+d.kwh,0);
                const totAct25 = fAct25.reduce((s,d)=>s+d.kwh,0);

                const varBud = totBud ? (totProj - totBud) / totBud : 0;
                const varAct = totAct25 ? (totProj - totAct25) / totAct25 : 0;

                const rcSummary = dimensions.rcs.map(rc => {
                    const b26 = fBud26.filter(d => d.rc === rc).reduce((s,d)=>s+d.kwh,0) / 1000000;
                    const p26 = fProj.filter(d => d.rc === rc).reduce((s,d)=>s+d.kwh,0) / 1000000;
                    return { rc, Budget: b26, Projection: p26 };
                }).filter(rc => rc.Budget > 0 || rc.Projection > 0);

                return (
                    <div className="p-6 space-y-6 h-full overflow-y-auto custom-scroll">
                        <div className="bg-white rounded-xl border p-4 shadow-sm flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-slate-800">Executive Summary</h2>
                                <p className="text-sm text-slate-500">Projected FY 2026 Year-End Trajectory.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Scenario:</span>
                                <select value={overviewScenario} onChange={e=>setOverviewScenario(e.target.value)} className="border-2 border-blue-200 rounded-lg px-4 py-2 font-bold text-blue-700 bg-blue-50 shadow-sm outline-none">
                                    <option value="leBase">LE Base</option>
                                    <option value="leCust">LE Cust Vol</option>
                                    <option value="leRC">LE RC Vol</option>
                                    <option value="leCustom">LE Advanced</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div className="bg-white rounded-xl border p-5 shadow-sm">
                                <div className="text-xs font-bold text-slate-400 uppercase mb-1">FY 2026 Projection</div>
                                <div className="text-3xl font-black text-slate-800">{formatNum(totProj)} <span className="text-sm font-bold text-slate-400">kWh</span></div>
                            </div>
                            <div className="bg-white rounded-xl border p-5 shadow-sm">
                                <div className="text-xs font-bold text-slate-400 uppercase mb-1">FY 2026 Budget</div>
                                <div className="text-3xl font-black text-blue-700">{formatNum(totBud)} <span className="text-sm font-bold text-blue-400">kWh</span></div>
                            </div>
                            <div className="bg-white rounded-xl border p-5 shadow-sm">
                                <div className="text-xs font-bold text-slate-400 uppercase mb-1">Variance vs Budget</div>
                                <div className={`text-3xl font-black flex items-center gap-2 ${totProj - totBud >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>
                                    {totProj - totBud > 0 ? '+' : ''}{formatNum(totProj - totBud)}
                                    <span className="text-sm px-2 py-1 rounded bg-slate-100">{formatPct(varBud)}</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl border p-5 shadow-sm">
                                <div className="text-xs font-bold text-slate-400 uppercase mb-1">Projected Revenue (US$)</div>
                                <div className="text-3xl font-black text-slate-800">{formatUSDb(fProj.reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0))}</div>
                                <div className="text-xs text-slate-400 mt-1">vs Bud: <span className={fProj.reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0)>=fBud26.reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0)?'text-emerald-600 font-bold':'text-red-500 font-bold'}>{formatPct((fProj.reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0)-fBud26.reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0))/(fBud26.reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0)||1))}</span></div>
                            </div>
                        <div className="bg-white rounded-xl border p-5 shadow-sm">
                                <div className="text-xs font-bold text-slate-400 uppercase mb-1">Variance vs 2025 Act</div>
                                <div className={`text-3xl font-black flex items-center gap-2 ${totProj - totAct25 >= 0 ? 'text-blue-600' : 'text-red-500'}`}>
                                    {totProj - totAct25 > 0 ? '+' : ''}{formatNum(totProj - totAct25)}
                                    <span className="text-sm px-2 py-1 rounded bg-slate-100">{formatPct(varAct)}</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl border p-5 shadow-sm flex flex-col min-h-[400px]">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="font-bold text-slate-800 flex items-center gap-2"><Icons.BookOpen /> Executive Comments & Action Items</h3>
                                    <button onClick={() => pushScenariosToCloud()} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm transition flex items-center gap-1">
                                        <Icons.Save /> Save Comments
                                    </button>
                                </div>
                                <textarea
                                    className="flex-1 w-full border border-slate-200 rounded-lg p-3 text-sm text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none custom-scroll"
                                    placeholder="Enter executive summary, variance explanations, or action items here..."
                                    value={overviewComments}
                                    onChange={e => setOverviewComments(e.target.value)}
                                />
                            </div>
                            <div className="bg-white rounded-xl border p-5 shadow-sm flex flex-col min-h-[400px]">
                                <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icons.Activity /> FY Breakdown by Rate Class (GWh)</h3>
                                <div className="flex-1 min-h-0">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart data={rcSummary}>
                                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                            <XAxis dataKey="rc" tick={{fontSize: 11}} />
                                            <YAxis tickFormatter={v => v.toFixed(0)} tick={{fontSize: 11}} />
                                            <Tooltip formatter={(v) => v.toFixed(2)} cursor={{fill: '#f1f5f9'}} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                                            <Legend wrapperStyle={{paddingTop: '10px'}} />
                                            <Bar dataKey="Budget" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                                            <Bar dataKey="Projection" fill="#10b981" radius={[4, 4, 0, 0]} />
                                        </BarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            };

            const renderMonthlyTab = () => {
                const sortedMonthly = sortArray(monthlyAggregatesRaw, monthlySort);
                const totA25 = monthlyAggregatesRaw.reduce((s,d)=>s+d.Act25,0); 
                const totB26 = monthlyAggregatesRaw.reduce((s,d)=>s+d.Bud26,0); 
                const totA26 = monthlyAggregatesRaw.reduce((s,d)=>s+(d.Act26||0),0);
                
                return (
                    <div className="p-6 space-y-6 h-full overflow-y-auto custom-scroll">
                        <div className="bg-white rounded-xl border p-5 flex flex-col min-h-[450px] shrink-0 shadow-sm">
                            <div className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icons.TrendingUp /> Monthly Trend & Scenarios (kWh)</div>
                            {renderGraphToggles()}
                            <div className="w-full h-[400px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={monthlyAggregatesRaw}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="month" tick={{fontSize: 11}} />
                                        <YAxis tickFormatter={v => (v/1000).toFixed(0)+'k'} tick={{fontSize: 11}} />
                                        <Tooltip formatter={(v) => formatNum(v)} contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                                        <Legend wrapperStyle={{paddingTop: '10px'}} />
                                        {graphToggles.act25 && <Line type="monotone" dataKey="Act25" name="2025 Actuals" stroke="#94a3b8" strokeDasharray="5 5" dot={false} />}
                                        {graphToggles.bud26 && <Line type="monotone" dataKey="Bud26" name="2026 Budget" stroke="#3b82f6" strokeWidth={2} dot={false} />}
                                        {graphToggles.act26 && <Line type="monotone" dataKey="Act26" name="2026 Actuals" stroke="#8b5cf6" strokeWidth={3} dot={{r:4}} />}
                                        {varScenarios.map(sc => graphToggles[sc.key.replace('Le', 'le')] && <Line key={sc.key} type="monotone" dataKey={sc.key} name={sc.label} stroke={sc.key==='LeBase'?'#f59e0b':sc.key==='LeCust'?'#d946ef':sc.key==='LeRC'?'#0ea5e9':'#6366f1'} strokeWidth={sc.key==='LeBase'?3:2} strokeDasharray="4 4" dot={false} />)}
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl border shadow-sm flex flex-col">
                            <div className="p-4 border-b flex justify-between items-center bg-slate-50">
                                <h3 className="font-bold text-slate-800 flex items-center gap-2"><Icons.Database /> Monthly Data Matrix</h3>
                                <button onClick={() => exportCSV(monthlyAggregatesRaw, 'Monthly_Scenarios_Summary.csv')} className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded font-bold text-sm flex items-center gap-2 border border-blue-200 transition">
                                    <Icons.Download /> Export Summary
                                </button>
                            </div>
                            <div className="overflow-x-auto relative">
                                <table className="w-full text-sm text-left whitespace-nowrap">
                                    <thead className="table-pin-header">
                                        <tr className="bg-slate-100">
                                            <SortHeader label="Month" columnKey="monthFull" currentSort={monthlySort} requestSort={(k) => handleSortRequest(k, monthlySort, setMonthlySort)} className="border-r table-pin-col bg-slate-100 z-30" />
                                            <SortHeader label="2025 Act" columnKey="Act25" currentSort={monthlySort} requestSort={(k) => handleSortRequest(k, monthlySort, setMonthlySort)} className="text-right" />
                                            <SortHeader label="2026 Bud" columnKey="Bud26" currentSort={monthlySort} requestSort={(k) => handleSortRequest(k, monthlySort, setMonthlySort)} className="text-right" />
                                            <SortHeader label="2026 Act" columnKey="Act26" currentSort={monthlySort} requestSort={(k) => handleSortRequest(k, monthlySort, setMonthlySort)} className="text-right" />
                                            {varScenarios.map(sc => <SortHeader key={sc.key} label={sc.label} columnKey={sc.key} currentSort={monthlySort} requestSort={(k) => handleSortRequest(k, monthlySort, setMonthlySort)} className={`text-right ${sc.text}`} />)}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sortedMonthly.map(row => (
                                            <tr key={row.monthFull} className="border-b hover:bg-slate-50">
                                                <td className="p-3 font-bold border-r table-pin-col bg-white">{row.monthFull}</td>
                                                <td className="p-3 text-right text-slate-500">{formatNum(row.Act25)}</td>
                                                <td className="p-3 text-right text-blue-600">{formatNum(row.Bud26)}</td>
                                                <td className="p-3 text-right font-bold text-purple-700">{row.Act26 ? formatNum(row.Act26) : '-'}</td>
                                                {varScenarios.map(sc => <td key={sc.key} className={`p-3 text-right font-bold ${sc.text}`}>{formatNum(row[sc.key])}</td>)}
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot className="bg-slate-200 font-black border-t-2 border-slate-300 sticky bottom-0 z-20">
                                        <tr>
                                            <td className="p-3 border-r table-pin-col bg-slate-200 z-30">TOTAL YTD/FY</td>
                                            <td className="p-3 text-right text-slate-600">{formatNum(totA25)}</td>
                                            <td className="p-3 text-right text-blue-800">{formatNum(totB26)}</td>
                                            <td className="p-3 text-right text-purple-800">{formatNum(totA26)}</td>
                                            {varScenarios.map(sc => <td key={sc.key} className={`p-3 text-right ${sc.text}`}>{formatNum(monthlyAggregatesRaw.reduce((s,d)=>s+(d[sc.key]||0),0))}</td>)}
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            };

            const renderAllocationTab = () => {
                const aMonths = [...new Set(rawActuals.map(d => d.Month))].filter(Boolean);
                const aQuarters = [...new Set(rawActuals.map(d => {
                    const p = parseTimeStr(d.Month);
                    return p.year > 0 ? `Q${p.qtr} ${p.year} Average` : null;
                }))].filter(Boolean);
                const refOptions = [...aQuarters, ...aMonths];

                return (
                    <div className="p-6 space-y-6 h-full overflow-y-auto custom-scroll">
                        <div className="bg-white p-6 rounded-xl border shadow-sm flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 flex items-center gap-2"><Icons.Calculator /> Budget Proration & Redistribution Engine</h3>
                                <p className="text-sm text-slate-500">Maps high-level budget targets to customer level based on historical Actuals.</p>
                            </div>
                            {isBudgetCommitted ? (
                                <button onClick={unlockAllocation} className="bg-slate-100 text-slate-800 px-6 py-2 rounded-lg font-bold border hover:bg-slate-200 transition shadow-sm">Unlock Allocation</button>
                            ) : (
                                <div className="flex gap-3">
                                    <button onClick={commitAllocation} disabled={allocationResults.length === 0} className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-emerald-700 transition disabled:opacity-50">Apply Granular Budget</button>
                                    <button onClick={() => { commitAllocation(); setTimeout(() => handleSaveVersion(), 100); }} disabled={allocationResults.length === 0} className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-blue-700 transition disabled:opacity-50 flex items-center gap-2"><Icons.Save /> Apply & Save</button>
                                </div>
                            )}
                        </div>
                        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-6 ${isBudgetCommitted ? 'opacity-60 pointer-events-none' : ''}`}>
                            <div className="bg-white p-5 rounded-xl border shadow-sm">
                                <h4 className="font-bold mb-4 flex items-center gap-2 text-blue-700">Month-to-Month Baseline Mapping</h4>
                                <div className="max-h-[300px] overflow-y-auto custom-scroll pr-2">
                                    <table className="w-full text-sm">
                                        <thead className="sticky top-0 bg-slate-50 border-b"><tr><th className="p-2 text-left text-slate-500">Budget Month</th><th className="p-2 text-left text-slate-500">Reference Actuals</th></tr></thead>
                                        <tbody>
                                            {Object.keys(monthMapping).map(bm => (
                                                <tr key={bm} className="border-b">
                                                    <td className="p-2 font-medium">{bm}</td>
                                                    <td className="p-2">
                                                        <select value={monthMapping[bm] || ''} onChange={e => setMonthMapping(p => ({...p, [bm]: e.target.value}))} className="w-full border rounded px-2 py-1 bg-white outline-none">
                                                            {refOptions.map(o => <option key={o} value={o}>{o}</option>)}
                                                        </select>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="bg-white p-5 rounded-xl border shadow-sm h-fit">
                                 <h4 className="font-bold mb-4 flex items-center gap-2 text-purple-700">Industry Growth Adjustments (%)</h4>
                                 <div className="flex gap-2 mb-4">
                                    <select id="ind-sel" className="flex-1 border rounded px-3 py-2 text-sm bg-white outline-none">{dimensions.inds.map(i => <option key={i}>{i}</option>)}</select>
                                    <input id="ind-val" type="number" placeholder="%" className="w-20 border rounded px-3 py-2 text-sm" />
                                    <button onClick={() => { const i = document.getElementById('ind-sel').value; const v = document.getElementById('ind-val').value; if(i && v) setAllocOverrides(p => ({...p, [i]: parseFloat(v)})); }} className="bg-slate-800 text-white px-4 rounded font-bold hover:bg-slate-900 transition">+</button>
                                 </div>
                                 <div className="space-y-2">
                                    {Object.entries(allocOverrides).map(([ind, val]) => (
                                        <div key={ind} className="flex justify-between items-center text-sm bg-slate-50 p-2 rounded border border-slate-100">
                                            <span className="font-medium text-slate-700">{ind}</span>
                                            <span className={`font-bold ${val>=0?'text-emerald-600':'text-red-500'}`}>{val}%</span>
                                            <button onClick={() => { const c = {...allocOverrides}; delete c[ind]; setAllocOverrides(c); }} className="text-red-400 hover:text-red-600">Remove</button>
                                        </div>
                                    ))}
                                 </div>
                            </div>
                        </div>
                    </div>
                );
            };

            const renderPivotTab = () => {
                if (actuals.length === 0) return null;
                if (!isBudgetCommitted) return renderEmptyBudgetWarning();

                const { rcMatrix, topMovers, bottomMovers } = pivotState;
                const sortedTopMovers = sortArray(topMovers, topSort);
                const sortedBotMovers = sortArray(bottomMovers, botSort);

                return (
                    <div className="p-6 h-full flex flex-col space-y-6 overflow-hidden">
                        <div className="bg-white rounded-xl border shadow-sm p-4 flex flex-col md:flex-row gap-4 justify-between shrink-0">
                            <div>
                                <h3 className="font-bold text-slate-800 flex items-center gap-2"><Icons.Grid /> Combined Scenario Pivot</h3>
                                <p className="text-xs text-slate-500">View Actuals combined with selected scenario (GWh).</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3">
                                <span className="text-xs font-bold text-slate-500">Timeframe:</span>
                                <select value={moversTimeFrame} onChange={e=>setMoversTimeFrame(e.target.value)} className="border rounded-lg px-3 py-1.5 font-bold text-purple-700 bg-white shadow-sm outline-none">
                                    <option value="FY">Full Year (FY)</option>
                                    <option value="YTD">YTD (Uses Global Filter)</option>
                                    <option value="MTD">MTD (Uses Global Filter)</option>
                                </select>
                                <span className="text-slate-300">|</span>
                                <span className="text-xs font-bold text-slate-500">Scenario:</span>
                                <select value={pivotScenario} onChange={e=>setPivotScenario(e.target.value)} className="border rounded-lg px-3 py-1.5 font-bold text-blue-700 bg-white shadow-sm outline-none">
                                    <option value="leBase">LE Base</option>
                                    <option value="leCust">LE Cust Vol</option>
                                    <option value="leRC">LE RC Vol</option>
                                    <option value="leCustom">LE Advanced</option>
                                    <option value="budgetCombined">Budget + Actuals</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 shrink-0">
                            <div className="bg-white rounded-xl border shadow-sm flex flex-col overflow-hidden max-h-[300px]">
                                <div className="p-3 border-b bg-slate-50 flex justify-between items-center text-sm">
                                    <h4 className="font-bold text-slate-800 underline decoration-blue-500 decoration-2 underline-offset-4">Top Performers</h4>
                                    <select value={moversRC} onChange={e=>setMoversRC(e.target.value)} className="bg-white border rounded px-2 py-0.5 outline-none text-xs text-blue-700 font-bold">
                                        <option value="All">All Rates</option>
                                        {dimensions.rcs.filter(r=>!['RT10','RT20','EV','BU'].includes(r)).map(r=><option key={r}>{r}</option>)}
                                    </select>
                                </div>
                                <div className="overflow-auto custom-scroll">
                                    <table className="w-full text-xs text-left">
                                        <thead className="sticky top-0 bg-white shadow-[0_1px_0_0_#e2e8f0]">
                                            <tr>
                                                <th className="p-2 text-slate-500">#</th>
                                                <SortHeader label="2025 Base" columnKey="baseline" currentSort={topSort} requestSort={(k) => handleSortRequest(k, topSort, setTopSort)} className="text-right text-slate-500" />
                                                <SortHeader label="2026 Target" columnKey="target" currentSort={topSort} requestSort={(k) => handleSortRequest(k, topSort, setTopSort)} className="text-right text-slate-500" />
                                                <SortHeader label="GWh Incline" columnKey="variance" currentSort={topSort} requestSort={(k) => handleSortRequest(k, topSort, setTopSort)} className="text-right text-slate-800" />
                                                <SortHeader label="% Growth" columnKey="pct" currentSort={topSort} requestSort={(k) => handleSortRequest(k, topSort, setTopSort)} className="text-right text-slate-500" />
                                                <SortHeader label="Account" columnKey="name" currentSort={topSort} requestSort={(k) => handleSortRequest(k, topSort, setTopSort)} className="text-slate-800 pl-4" />
                                                <th className="p-2 text-slate-500 w-16">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sortedTopMovers.map((m, idx) => {
                                                const commentKey = `${pivotScenario}|${moversTimeFrame}|${m.name}`;
                                                const hasComment = !!varianceComments[commentKey];
                                                return (
                                                    <tr key={m.name} className="border-b last:border-0 hover:bg-slate-50">
                                                        <td className="p-2 text-slate-400">{idx + 1}</td>
                                                        <td className="p-2 text-right font-medium text-slate-500">{m.baseline.toFixed(2)}</td>
                                                        <td className="p-2 text-right font-medium text-slate-500">{m.target.toFixed(2)}</td>
                                                        <td className="p-2 text-right font-bold text-emerald-600">+{m.variance.toFixed(2)}</td>
                                                        <td className="p-2 text-right font-medium text-emerald-600 bg-emerald-50/30">+{m.pct.toFixed(1)}%</td>
                                                        <td className="p-2 pl-4 max-w-[160px]">
                                                            <div className="flex items-center gap-1.5">
                                                                {customerRiskFlags[m.name] && (
                                                                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${customerRiskFlags[m.name].level==='red'?'bg-red-500':customerRiskFlags[m.name].level==='amber'?'bg-amber-400':'bg-yellow-300'}`} title={`Risk: ${customerRiskFlags[m.name].ytdPct}% vs budget`}></span>
                                                                )}
                                                                <span className="truncate text-slate-700" title={m.name}>{m.name}</span>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 text-center">
                                                            <button onClick={() => handleAddComment(m.name)} className="text-slate-400 hover:text-blue-600 transition" title={hasComment ? varianceComments[commentKey] : "Add explanation"}>
                                                                {hasComment ? '💬' : '➕'}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                            {sortedTopMovers.length === 0 && <tr><td colSpan="7" className="p-4 text-center text-slate-400">No inclines found for this selection.</td></tr>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div className="bg-white rounded-xl border shadow-sm flex flex-col overflow-hidden max-h-[300px]">
                                <div className="p-3 border-b bg-slate-50 flex justify-between items-center text-sm">
                                    <h4 className="font-bold text-slate-800 underline decoration-red-500 decoration-2 underline-offset-4">Bottom Performers</h4>
                                </div>
                                <div className="overflow-auto custom-scroll">
                                    <table className="w-full text-xs text-left">
                                        <thead className="sticky top-0 bg-white shadow-[0_1px_0_0_#e2e8f0]">
                                            <tr>
                                                <th className="p-2 text-slate-500">#</th>
                                                <SortHeader label="2025 Base" columnKey="baseline" currentSort={botSort} requestSort={(k) => handleSortRequest(k, botSort, setBotSort)} className="text-right text-slate-500" />
                                                <SortHeader label="2026 Target" columnKey="target" currentSort={botSort} requestSort={(k) => handleSortRequest(k, botSort, setBotSort)} className="text-right text-slate-500" />
                                                <SortHeader label="GWh Decline" columnKey="variance" currentSort={botSort} requestSort={(k) => handleSortRequest(k, botSort, setBotSort)} className="text-right text-slate-800" />
                                                <SortHeader label="% Growth" columnKey="pct" currentSort={botSort} requestSort={(k) => handleSortRequest(k, botSort, setBotSort)} className="text-right text-slate-500" />
                                                <SortHeader label="Account" columnKey="name" currentSort={botSort} requestSort={(k) => handleSortRequest(k, botSort, setBotSort)} className="text-slate-800 pl-4" />
                                                <th className="p-2 text-slate-500 w-16">Notes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sortedBotMovers.map((m, idx) => {
                                                const commentKey = `${pivotScenario}|${moversTimeFrame}|${m.name}`;
                                                const hasComment = !!varianceComments[commentKey];
                                                return (
                                                    <tr key={m.name} className="border-b last:border-0 hover:bg-slate-50">
                                                        <td className="p-2 text-slate-400">{idx + 1}</td>
                                                        <td className="p-2 text-right font-medium text-slate-500">{m.baseline.toFixed(2)}</td>
                                                        <td className="p-2 text-right font-medium text-slate-500">{m.target.toFixed(2)}</td>
                                                        <td className="p-2 text-right font-bold text-red-500">{m.variance.toFixed(2)}</td>
                                                        <td className="p-2 text-right font-medium text-red-500 bg-red-50/30">{m.pct.toFixed(1)}%</td>
                                                        <td className="p-2 truncate max-w-[150px] text-slate-700 pl-4" title={m.name}>{m.name}</td>
                                                        <td className="p-2 text-center">
                                                            <button onClick={() => handleAddComment(m.name)} className="text-slate-400 hover:text-blue-600 transition" title={hasComment ? varianceComments[commentKey] : "Add explanation"}>
                                                                {hasComment ? '💬' : '➕'}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                            {sortedBotMovers.length === 0 && <tr><td colSpan="7" className="p-4 text-center text-slate-400">No declines found for this selection.</td></tr>}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border shadow-sm flex-1 flex flex-col overflow-hidden">
                            <div className="p-3 border-b bg-cyan-500 text-white font-bold flex justify-between items-center text-sm shrink-0">
                                <span>net_kwh_billed_consump (GWh)</span>
                            </div>
                            <div className="flex-1 overflow-auto custom-scroll relative">
                                <table className="w-full text-xs text-right whitespace-nowrap">
                                    <thead className="table-pin-header">
                                        <tr className="bg-slate-800 text-white">
                                            <th className="p-2 text-left border-r border-slate-700 table-pin-col bg-slate-800 z-30">Rate category</th>
                                            <th className="p-2 text-left border-r border-slate-700 bg-slate-800 sticky left-[100px] z-30 w-64 max-w-xs">Name</th>
                                            {monthNames.map(m => <th key={m} className="p-2 border-r border-slate-700">{m.substring(0,3)}</th>)}
                                            <th className="p-2 font-black bg-slate-900">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(rcMatrix).sort((a,b) => getRcWeight(a[0]) - getRcWeight(b[0])).map(([rc, rcData]) => {
                                            const isExpanded = expandedPivotRC === rc;
                                            const hasCusts = Object.keys(rcData.customers).filter(c => c).length > 0;
                                            
                                            return (
                                                <React.Fragment key={rc}>
                                                    <tr className={`border-b hover:bg-slate-50 transition ${hasCusts ? 'cursor-pointer' : ''}`} onClick={() => hasCusts && setExpandedPivotRC(isExpanded ? null : rc)}>
                                                        <td className="p-2 text-left font-bold border-r table-pin-col bg-white z-20 whitespace-nowrap">
                                                            <div className="flex items-center gap-1 w-[90px]">
                                                                {hasCusts ? <span className="text-[10px] text-slate-400 w-3">{isExpanded ? '▼' : '▶'}</span> : <span className="w-3"></span>}
                                                                {rc}
                                                            </div>
                                                        </td>
                                                        <td className="p-2 text-left border-r bg-white sticky left-[100px] z-20 w-64 max-w-xs text-slate-400 italic">
                                                            {hasCusts ? `[${Object.keys(rcData.customers).length} Accounts]` : 'Aggregated'}
                                                        </td>
                                                        {rcData.months.map((val, i) => (
                                                            <td key={i} className="p-2 border-r border-slate-100 font-bold">{val !== 0 ? val.toFixed(2) : '0.00'}</td>
                                                        ))}
                                                        <td className="p-2 font-black bg-slate-50 text-blue-800">{rcData.total.toFixed(2)}</td>
                                                    </tr>
                                                    {isExpanded && Object.entries(rcData.customers).sort((a,b) => b[1].total - a[1].total).map(([custName, custData]) => {
                                                        if (!custName) return null;
                                                        return (
                                                            <tr key={`${rc}-${custName}`} className="border-b bg-slate-50/50 hover:bg-slate-100 transition">
                                                                <td className="p-2 border-r table-pin-col bg-slate-50/95 z-10 text-transparent">_</td>
                                                                <td className="p-2 text-left border-r bg-slate-50/95 sticky left-[100px] z-10 w-64 max-w-xs truncate" title={custName}>{custName}</td>
                                                                {custData.months.map((val, i) => (
                                                                    <td key={i} className="p-2 border-r border-slate-200 text-slate-600">{val !== 0 ? val.toFixed(2) : '0.00'}</td>
                                                                ))}
                                                                <td className="p-2 font-bold bg-slate-100">{custData.total.toFixed(2)}</td>
                                                            </tr>
                                                        );
                                                    })}
                                                </React.Fragment>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot className="bg-slate-200 font-black border-t-2 border-slate-300 sticky bottom-0 z-30">
                                        <tr>
                                            <td className="p-2 text-left border-r table-pin-col bg-slate-200 z-40">TOTAL</td>
                                            <td className="p-2 border-r bg-slate-200 sticky left-[100px] z-40"></td>
                                            {Array(12).fill(0).map((_, i) => {
                                                const sum = Object.values(rcMatrix).reduce((s, rc) => s + rc.months[i], 0);
                                                return <td key={i} className="p-2 border-r border-slate-300 text-blue-900">{sum.toFixed(2)}</td>;
                                            })}
                                            <td className="p-2 text-blue-900 bg-slate-300">{Object.values(rcMatrix).reduce((s, rc) => s + rc.total, 0).toFixed(2)}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            };

            const renderVarianceTab = () => {
                if (!isBudgetCommitted) return renderEmptyBudgetWarning();
                
                const ytdLimit = ytdMonth === 'All' ? 12 : monthMap[ytdMonth];
                const matrixObj = {};

                const initMatrix = (dim) => { 
                    if(!matrixObj[dim]) matrixObj[dim] = { dim, a25:0, a26:0, b26:0, leCust:0, leRc:0, leBase:0, leCustom:0, sub: {} }; 
                };
                const initSubMatrix = (dim, subDim) => { 
                    if(!matrixObj[dim].sub[subDim]) matrixObj[dim].sub[subDim] = { dim: subDim, a25:0, a26:0, b26:0, leCust:0, leRc:0, leBase:0, leCustom:0 }; 
                };

                const datasets = [
                    { data: getFiltered(actuals), year: 2025, field: 'a25' },
                    { data: getFiltered(actuals), year: 2026, field: 'a26' },
                    { data: getFiltered(budget), year: 2026, field: 'b26' },
                    { data: getFiltered(leCustGrowth), year: null, field: 'leCust' },
                    { data: getFiltered(leRCGrowth), year: null, field: 'leRc' },
                    { data: getFiltered(leBaseGrowth), year: null, field: 'leBase' },
                    { data: getFiltered(leCustomGrowth), year: null, field: 'leCustom' },
                ];

                datasets.forEach(({ data, year, field }) => {
                    data.forEach(d => {
                        if (d.month > ytdLimit) return;
                        if (year && d.year !== year) return;
                        const dimVal = d[varianceDim] || 'Unassigned';
                        initMatrix(dimVal);
                        matrixObj[dimVal][field] += d.kwh;
                        if (drillDownDim !== 'none') {
                            const subDimVal = d[drillDownDim] || 'Unassigned';
                            initSubMatrix(dimVal, subDimVal);
                            matrixObj[dimVal].sub[subDimVal][field] += d.kwh;
                        }
                    });
                });

                const matrixArr = Object.values(matrixObj);
                const sortedMatrix = sortArray(matrixArr, varSort);

                const totA25 = matrixArr.reduce((s,v)=>s+v.a25,0); const totB26 = matrixArr.reduce((s,v)=>s+v.b26,0); const totA26 = matrixArr.reduce((s,v)=>s+v.a26,0);
                const totLeCust = matrixArr.reduce((s,v)=>s+v.leCust,0); const totLeRc = matrixArr.reduce((s,v)=>s+v.leRc,0); 
                const totLeBase = matrixArr.reduce((s,v)=>s+v.leBase,0); const totLeCustom = matrixArr.reduce((s,v)=>s+v.leCustom,0);

                const renderVarPct = (val, base) => formatPct(base ? (val - base) / base : 0);
                const colorPct = (val, base) => { const pct = base ? (val - base) / base : 0; return pct >= 0 ? 'text-emerald-600' : 'text-red-500'; };

                const renderVarRowCells = (v, isSub = false) => (
                    <React.Fragment>
                        <td className={`p-2 text-right text-slate-500 ${isSub ? 'text-xs' : ''}`}>{formatNum(v.a25)}</td>
                        <td className={`p-2 text-right text-blue-700 ${isSub ? 'text-xs opacity-80' : ''}`}>{formatNum(v.b26)}</td>
                        <td className={`p-2 text-right text-slate-800 border-l border-slate-200 ${isSub ? 'text-xs' : ''}`}>{formatNum(v.a26)}</td>
                        <td className={`p-2 text-right text-xs ${isSub?'font-medium':'font-bold'} ${colorPct(v.a26, v.b26)}`}>{renderVarPct(v.a26, v.b26)}</td>
                        <td className={`p-2 text-right text-xs ${isSub?'font-medium':'font-bold'} ${colorPct(v.a26, v.a25)}`}>{renderVarPct(v.a26, v.a25)}</td>
                        {varScenarios.map(sc => (
                            <React.Fragment key={sc.key}>
                                <td className={`p-2 text-right border-l border-slate-200 ${sc.lightBg} ${isSub ? sc.text.replace('600','600 text-xs opacity-80') : sc.text.replace('600','700')}`}>{formatNum(v[sc.key.replace('Le', 'le')])}</td>
                                <td className={`p-2 text-right text-xs ${isSub?'font-medium':'font-bold'} ${sc.lightBg} ${colorPct(v[sc.key.replace('Le', 'le')], v.b26)}`}>{renderVarPct(v[sc.key.replace('Le', 'le')], v.b26)}</td>
                                <td className={`p-2 text-right text-xs ${isSub?'font-medium':'font-bold'} ${sc.lightBg} ${colorPct(v[sc.key.replace('Le', 'le')], v.a25)}`}>{renderVarPct(v[sc.key.replace('Le', 'le')], v.a25)}</td>
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                );

                const totalsObj = { a25: totA25, b26: totB26, a26: totA26, leCust: totLeCust, leRc: totLeRc, leBase: totLeBase, leCustom: totLeCustom };

                return (
                    <div className="p-6 h-full flex flex-col">
                        <div className="bg-white rounded-xl border shadow-sm flex-1 flex flex-col overflow-hidden">
                            <div className="p-4 border-b flex justify-between items-center bg-slate-50">
                                <h3 className="font-bold text-slate-800">Deep-Dive Variance Matrix (All Scenarios vs Budget & PY)</h3>
                                <div className="flex items-center gap-4">
                                    <button onClick={() => exportCSV([...getFiltered(actuals).filter(d=>d.month<=ytdLimit), ...getFiltered(budget).filter(d=>d.month<=ytdLimit)], `Variance_Base_Level_Data.csv`)} className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-100 shadow-sm transition"><Icons.Download /> Base Data</button>
                                    <div className="flex items-center gap-1 bg-white border border-slate-300 rounded-lg px-3 shadow-sm text-sm h-9">
                                        <span className="text-slate-500 font-bold px-1">View:</span>
                                        <select value={varianceDim} onChange={e=>{
                                            const val = e.target.value;
                                            setVarianceDim(val);
                                            setExpandedRow(null);
                                            if (drillDownDim === val) setDrillDownDim('none');
                                        }} className="bg-transparent font-bold text-blue-700 outline-none pr-1">
                                            <option value="rc">Rate Category</option>
                                            <option value="parish">Parish</option>
                                            <option value="industry">Industry</option>
                                            <option value="name">Customer</option>
                                        </select>
                                        <span className="text-slate-300 mx-1">|</span>
                                        <span className="text-slate-500 font-bold px-1">Drill:</span>
                                        <select value={drillDownDim} onChange={e=>{setDrillDownDim(e.target.value); setExpandedRow(null);}} className="bg-transparent font-bold text-purple-700 outline-none pr-1">
                                            <option value="none">None</option>
                                            {varianceDim !== 'rc' && <option value="rc">Rate Category</option>}
                                            {varianceDim !== 'parish' && <option value="parish">Parish</option>}
                                            {varianceDim !== 'industry' && <option value="industry">Industry</option>}
                                            {varianceDim !== 'name' && <option value="name">Customer</option>}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 overflow-auto custom-scroll relative">
                                <table className="w-full text-sm text-left whitespace-nowrap">
                                    <thead className="table-pin-header">
                                        <tr className="bg-slate-100">
                                            <SortHeader label={varianceDim.toUpperCase()} columnKey="dim" currentSort={varSort} requestSort={(k) => handleSortRequest(k, varSort, setVarSort)} className="border-r table-pin-col bg-slate-100 z-30" />
                                            <SortHeader label="2025 Act" columnKey="a25" currentSort={varSort} requestSort={(k) => handleSortRequest(k, varSort, setVarSort)} className="text-right" />
                                            <SortHeader label="2026 Bud" columnKey="b26" currentSort={varSort} requestSort={(k) => handleSortRequest(k, varSort, setVarSort)} className="text-right" />
                                            <SortHeader label="2026 Act" columnKey="a26" currentSort={varSort} requestSort={(k) => handleSortRequest(k, varSort, setVarSort)} className="text-right border-l border-slate-300" />
                                            <th className="p-2 text-right text-xs text-slate-500">vs Bud</th>
                                            <th className="p-2 text-right text-xs text-slate-500">vs PY</th>
                                            {varScenarios.map(sc => (
                                                <React.Fragment key={sc.key}>
                                                    <SortHeader label={sc.label} columnKey={sc.key.replace('Le', 'le')} currentSort={varSort} requestSort={(k) => handleSortRequest(k, varSort, setVarSort)} className={`text-right border-l border-slate-300 ${sc.headText} ${sc.headBg}`} />
                                                    <th className={`p-2 text-right text-xs ${sc.text.replace('600', '500')} ${sc.headBg}`}>vs Bud</th>
                                                    <th className={`p-2 text-right text-xs ${sc.text.replace('600', '500')} ${sc.headBg}`}>vs PY</th>
                                                </React.Fragment>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {sortedMatrix.map(v => {
                                            const dim = v.dim;
                                            const isExpanded = expandedRow === dim;
                                            const hasSub = drillDownDim !== 'none' && Object.keys(v.sub).length > 0;
                                            const subItems = Object.values(v.sub).sort((a,b) => b.a26 - a.a26).slice(0,100);

                                            return (
                                                <React.Fragment key={dim}>
                                                    <tr className={`border-b hover:bg-slate-50 transition ${hasSub ? 'cursor-pointer' : ''}`} onClick={() => hasSub && setExpandedRow(isExpanded ? null : dim)}>
                                                        <td className="p-2 font-bold border-r table-pin-col bg-white whitespace-nowrap z-20">
                                                            <div className="flex items-center gap-2 max-w-[200px]">
                                                                {drillDownDim !== 'none' ? (
                                                                    <span className="w-4 text-center text-[10px] text-slate-400 hover:text-blue-600 transition flex-shrink-0">{isExpanded ? '▼' : '▶'}</span>
                                                                ) : <span className="w-4"></span>}
                                                                <span className="truncate" title={dim}>{dim}</span>
                                                            </div>
                                                        </td>
                                                        {renderVarRowCells(v, false)}
                                                    </tr>
                                                    {isExpanded && subItems.map(sv => (
                                                        <tr key={`${dim}-${sv.dim}`} className="border-b bg-slate-50/80 hover:bg-slate-100 text-xs transition">
                                                            <td className="p-2 font-medium border-r table-pin-col bg-slate-50/95 whitespace-nowrap text-slate-600 z-10">
                                                                <div className="flex items-center gap-2 pl-5 max-w-[200px]">
                                                                    <span className="w-2 h-2 border-l-2 border-b-2 border-slate-300 inline-block mb-1 opacity-60 flex-shrink-0"></span>
                                                                    <span className="truncate" title={sv.dim}>{sv.dim}</span>
                                                                </div>
                                                            </td>
                                                            {renderVarRowCells(sv, true)}
                                                        </tr>
                                                    ))}
                                                </React.Fragment>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot className="bg-slate-200 font-black border-t-2 border-slate-300 sticky bottom-0 z-30">
                                        <tr>
                                            <td className="p-2 border-r table-pin-col bg-slate-200 z-40 pl-8 uppercase tracking-wider text-slate-700">TOTAL YTD/FY</td>
                                            {renderVarRowCells(totalsObj, false)}
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            };

            const renderGenericForecastTab = (leDataset, title, description, iconNode, colorClass, activeMode = '', customControls = null) => {
                if (!isBudgetCommitted) return renderEmptyBudgetWarning();
                
                const fAct = getFiltered(actuals); const fBud = getFiltered(budget); const fLE = getFiltered(leDataset);
                const fLeCust = getFiltered(leCustGrowth); const fLeRC = getFiltered(leRCGrowth); const fLeBase = getFiltered(leBaseGrowth); const fLeCustom = getFiltered(leCustomGrowth);

                const totA25 = fAct.filter(d => d.year === 2025).reduce((s,d)=>s+d.kwh,0); 
                const totB26 = fBud.filter(d => d.year === 2026).reduce((s,d)=>s+d.kwh,0);
                const totLE = fLE.reduce((s,d)=>s+d.kwh,0);

                const validRcs = dimensions.rcs.filter(rc => {
                    return fAct.some(d => d.rc === rc) || fBud.some(d => d.rc === rc) || fLE.some(d => d.rc === rc);
                });

                const mappedRcs = validRcs.map(rc => {
                    const a25 = fAct.filter(d => d.rc === rc && d.year === 2025).reduce((s,d)=>s+d.kwh,0); 
                    const b26 = fBud.filter(d => d.rc === rc && d.year === 2026).reduce((s,d)=>s+d.kwh,0);
                    const le26 = fLE.filter(d => d.rc === rc).reduce((s,d)=>s+d.kwh,0); 
                    const lCust26 = fLeCust.filter(d => d.rc === rc).reduce((s,d)=>s+d.kwh,0); 
                    const lRc26 = fLeRC.filter(d => d.rc === rc).reduce((s,d)=>s+d.kwh,0); 
                    const lBase26 = fLeBase.filter(d => d.rc === rc).reduce((s,d)=>s+d.kwh,0); 
                    const lCustom26 = fLeCustom.filter(d => d.rc === rc).reduce((s,d)=>s+d.kwh,0);
                    const vsBud = b26 ? (le26-b26)/b26 : 0; 
                    const vsPY = a25 ? (le26-a25)/a25 : 0;
                    return { rc, a25, b26, le26, lCust26, lRc26, lBase26, lCustom26, vsBud, vsPY };
                });

                const sortedRcs = sortArray(mappedRcs, forecastSort);

                return (
                    <div className="p-6 h-full overflow-y-auto custom-scroll space-y-6">
                        {customControls}
                        <div className="flex justify-end gap-3">
                            <button onClick={() => exportCSV(fLE, `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_base_level.csv`)} className="bg-white border hover:bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition"><Icons.Download /> Download Base Level Data</button>
                        </div>
                        <div className="bg-white p-8 rounded-xl border shadow-sm flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">{iconNode} {title}</h3>
                                <p className="text-sm text-slate-500 mt-1">{description}</p>
                            </div>
                            <div className="text-right">
                                <div className="text-[10px] text-slate-400 font-bold uppercase">FY 2026 Forecasted Gap to Budget</div>
                                <div className={`text-3xl font-black ${(totLE - totB26) >= 0 ? 'text-emerald-600' : 'text-red-500'}`}>{formatNum(totLE - totB26)}</div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
                            <div className="p-4 bg-slate-50 border-b font-bold flex items-center gap-2"><Icons.Zap /> Forecast vs Targets by Rate Class</div>
                            <table className="w-full text-sm text-left whitespace-nowrap">
                                <thead className="bg-slate-100 text-slate-600 font-bold">
                                    <tr>
                                        <SortHeader label="Rate Category" columnKey="rc" currentSort={forecastSort} requestSort={(k) => handleSortRequest(k, forecastSort, setForecastSort)} />
                                        <SortHeader label="2025 Act" columnKey="a25" currentSort={forecastSort} requestSort={(k) => handleSortRequest(k, forecastSort, setForecastSort)} className="text-right" />
                                        <SortHeader label="2026 Bud" columnKey="b26" currentSort={forecastSort} requestSort={(k) => handleSortRequest(k, forecastSort, setForecastSort)} className="text-right" />
                                        <SortHeader label="LE Cust Vol" columnKey="lCust26" currentSort={forecastSort} requestSort={(k) => handleSortRequest(k, forecastSort, setForecastSort)} className={`text-right ${activeMode === 'leCust' ? 'bg-purple-100 text-purple-800' : 'text-purple-600/70'}`} />
                                        <SortHeader label="LE RC Vol" columnKey="lRc26" currentSort={forecastSort} requestSort={(k) => handleSortRequest(k, forecastSort, setForecastSort)} className={`text-right ${activeMode === 'leRC' ? 'bg-blue-100 text-blue-800' : 'text-blue-600/70'}`} />
                                        <SortHeader label="LE Base" columnKey="lBase26" currentSort={forecastSort} requestSort={(k) => handleSortRequest(k, forecastSort, setForecastSort)} className={`text-right ${activeMode === 'leBase' ? 'bg-orange-100 text-orange-800' : 'text-orange-600/70'}`} />
                                        <SortHeader label="LE Advanced" columnKey="lCustom26" currentSort={forecastSort} requestSort={(k) => handleSortRequest(k, forecastSort, setForecastSort)} className={`text-right ${activeMode === 'leCustom' ? 'bg-indigo-100 text-indigo-800' : 'text-indigo-600/70'}`} />
                                        <SortHeader label="Active LE vs Bud %" columnKey="vsBud" currentSort={forecastSort} requestSort={(k) => handleSortRequest(k, forecastSort, setForecastSort)} className="text-right border-l border-slate-200" />
                                        <SortHeader label="Active LE vs PY %" columnKey="vsPY" currentSort={forecastSort} requestSort={(k) => handleSortRequest(k, forecastSort, setForecastSort)} className="text-right" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedRcs.map(r => (
                                        <tr key={r.rc} className="border-b hover:bg-slate-50">
                                            <td className="p-3 font-bold">{r.rc}</td>
                                            <td className="p-3 text-right text-slate-400">{formatNum(r.a25)}</td>
                                            <td className="p-3 text-right text-blue-600">{formatNum(r.b26)}</td>
                                            <td className={`p-3 text-right ${activeMode === 'leCust' ? 'font-black text-purple-600 bg-purple-50/50' : 'text-purple-500'}`}>{formatNum(r.lCust26)}</td>
                                            <td className={`p-3 text-right ${activeMode === 'leRC' ? 'font-black text-blue-600 bg-blue-50/50' : 'text-blue-500'}`}>{formatNum(r.lRc26)}</td>
                                            <td className={`p-3 text-right ${activeMode === 'leBase' ? 'font-black text-orange-600 bg-orange-50/50' : 'text-orange-500'}`}>{formatNum(r.lBase26)}</td>
                                            <td className={`p-3 text-right ${activeMode === 'leCustom' ? 'font-black text-indigo-600 bg-indigo-50/50' : 'text-indigo-500'}`}>{formatNum(r.lCustom26)}</td>
                                            <td className={`p-3 text-right font-bold border-l border-slate-100 ${r.vsBud>=0?'text-emerald-600':'text-red-500'}`}>{formatPct(r.vsBud)}</td>
                                            <td className={`p-3 text-right font-bold ${r.vsPY>=0?'text-blue-600':'text-red-500'}`}>{formatPct(r.vsPY)}</td>
                                        </tr>
                                    ))}
                                    {sortedRcs.length === 0 && <tr><td colSpan="9" className="p-4 text-center text-slate-400">No data found for this selection.</td></tr>}
                                </tbody>
                                <tfoot className="bg-slate-100 font-black text-slate-800 border-t-2 border-slate-300">
                                    <tr>
                                        <td className="p-3">TOTAL</td>
                                        <td className="p-3 text-right text-slate-500">{formatNum(totA25)}</td>
                                        <td className="p-3 text-right text-blue-700">{formatNum(totB26)}</td>
                                        <td className={`p-3 text-right ${activeMode === 'leCust' ? 'text-purple-800 bg-purple-100' : 'text-purple-700'}`}>{formatNum(monthlyAggregatesRaw.reduce((s,d)=>s+d.LeCust,0))}</td>
                                        <td className={`p-3 text-right ${activeMode === 'leRC' ? 'text-blue-800 bg-blue-100' : 'text-blue-700'}`}>{formatNum(monthlyAggregatesRaw.reduce((s,d)=>s+d.LeRC,0))}</td>
                                        <td className={`p-3 text-right ${activeMode === 'leBase' ? 'text-orange-800 bg-orange-100' : 'text-orange-700'}`}>{formatNum(monthlyAggregatesRaw.reduce((s,d)=>s+d.LeBase,0))}</td>
                                        <td className={`p-3 text-right ${activeMode === 'leCustom' ? 'text-indigo-800 bg-indigo-100' : 'text-indigo-700'}`}>{formatNum(monthlyAggregatesRaw.reduce((s,d)=>s+d.LeCustom,0))}</td>
                                        <td className={`p-3 text-right border-l border-slate-200 ${totB26 ? ((totLE - totB26) / totB26 >= 0 ? 'text-emerald-600' : 'text-red-500') : ''}`}>{formatPct(totB26 ? (totLE - totB26) / totB26 : 0)}</td>
                                        <td className={`p-3 text-right ${totA25 ? ((totLE - totA25) / totA25 >= 0 ? 'text-blue-600' : 'text-red-500') : ''}`}>{formatPct(totA25 ? (totLE - totA25) / totA25 : 0)}</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                );
            };

            const renderLeCustTab = () => renderGenericForecastTab(leCustGrowth, 'LE: Customer Volumetric Trend', "Projects Apr-Dec using Granular Budget adjusted by each Customer's average monthly kWh movement (Q1 26 vs Q1 25).", <Icons.Users />, 'purple', 'leCust');
            const renderLeRCTab = () => renderGenericForecastTab(leRCGrowth, 'LE: Rate Class Volumetric Trend', 'Projects Apr-Dec using Granular Budget adjusted by the Rate Class average monthly kWh movement (Q1 26 vs Q1 25).', <Icons.Zap />, 'blue', 'leRC');
            const renderLeBaseTab = () => renderGenericForecastTab(leBaseGrowth, 'LE: Base Trend', 'Blended Projection: Uses Customer Volumetric Trend for RT10, RT20, and RT60. Uses Rate Class Volumetric Trend for all other classes.', <Icons.Briefcase />, 'orange', 'leBase');
            const renderLeCustomTab = () => renderGenericForecastTab(leCustomGrowth, 'LE: Advanced Scenario Builder', 'Projection based on multi-dimensional growth adjustments applied to the base budget.', <Icons.Sliders />, 'indigo', 'leCustom', renderAdvOverridesUI());


            // ============================================================
            // TAB: CUSTOMER ENRICHMENT
            // ============================================================
            const renderCustomerTab = () => {
                const noHistoryRows = allocationResults.filter(r => r.name === 'NO HISTORY' || r.acct === 'UNALLOCATED');
                const uniqueProblems = [];
                const seen = new Set();
                noHistoryRows.forEach(r => {
                    const key = `${r.rc}|${r.parish}`;
                    if (!seen.has(key)) { seen.add(key); uniqueProblems.push({ rc: r.rc, parish: r.parish, amount: 0 }); }
                    uniqueProblems.find(u => u.rc === r.rc && u.parish === r.parish) && (uniqueProblems.find(u => u.rc === r.rc && u.parish === r.parish).amount += r.finalA);
                });

                const handleSaveEnrichment = (acct, field, value) => {
                    const updated = { ...customerEnrichment, [acct]: { ...(customerEnrichment[acct] || {}), [field]: value } };
                    setCustomerEnrichment(updated);
                    if (supabaseConfig.url && supabaseConfig.key) {
                        pushScenariosToCloud(savedVersions, varianceComments, overviewComments, accountNameMap, updated);
                    }
                };

                const [newAcct, setNewAcct] = React.useState({ acct: '', name: '', rc: 'RT40', parish: '', industry: '', kvaDemand: '', notes: '' });

                const handleAddAccount = () => {
                    if (!newAcct.acct || !newAcct.name) return;
                    const updated = { ...customerEnrichment, [newAcct.acct]: { name: newAcct.name, rc: newAcct.rc, parish: newAcct.parish, industry: newAcct.industry, kvaDemand: newAcct.kvaDemand, notes: newAcct.notes } };
                    setCustomerEnrichment(updated);
                    if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(savedVersions, varianceComments, overviewComments, accountNameMap, updated);
                    setNewAcct({ acct: '', name: '', rc: 'RT40', parish: '', industry: '', kvaDemand: '', notes: '' });
                };

                return (
                    <div className="p-6 h-full overflow-y-auto custom-scroll space-y-6">
                        {/* Header */}
                        <div className="bg-white rounded-xl border p-5 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Icons.Users /> Customer Data Enrichment</h2>
                            <p className="text-sm text-slate-500 mt-1">Manually fill in missing customer data for NO HISTORY and UNALLOCATED accounts so they can be properly included in forecasts and revenue calculations.</p>
                        </div>

                        {/* Problem Summary */}
                        {uniqueProblems.length > 0 && (
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                                <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2"><Icons.Activity /> Unresolved Budget Groups ({uniqueProblems.length})</h3>
                                <p className="text-xs text-amber-700 mb-3">These RC + Parish combinations have budget but no matching actuals history. Adding customer accounts below will resolve them.</p>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {uniqueProblems.map((p,i) => (
                                        <div key={i} className="bg-white rounded-lg p-3 border border-amber-200 text-center">
                                            <div className="font-black text-amber-700">{p.rc}</div>
                                            <div className="text-xs text-slate-600">{p.parish}</div>
                                            <div className="text-xs font-bold text-slate-500 mt-1">{formatNum(p.amount)} kWh budget</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Add New Account Form */}
                        <div className="bg-white rounded-xl border shadow-sm p-5">
                            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icons.CheckCircle /> Add / Fix Customer Account</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">JPS A/C #</label>
                                    <input type="text" value={newAcct.acct} onChange={e=>setNewAcct(p=>({...p,acct:e.target.value}))} placeholder="e.g. 1234567" className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
                                </div>
                                <div className="md:col-span-1">
                                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Customer Name</label>
                                    <input type="text" value={newAcct.name} onChange={e=>setNewAcct(p=>({...p,name:e.target.value}))} placeholder="Full name" className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Rate Class</label>
                                    <select value={newAcct.rc} onChange={e=>setNewAcct(p=>({...p,rc:e.target.value}))} className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 bg-white">
                                        {['BU','EV','RT10','RT20','RT40','RT50','RT60','RT70'].map(r=><option key={r}>{r}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Parish</label>
                                    <input type="text" value={newAcct.parish} onChange={e=>setNewAcct(p=>({...p,parish:e.target.value}))} placeholder="e.g. Kingston" className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Industry</label>
                                    <input type="text" value={newAcct.industry} onChange={e=>setNewAcct(p=>({...p,industry:e.target.value}))} placeholder="e.g. Manufacturing" className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">KVA Demand</label>
                                    <input type="number" value={newAcct.kvaDemand} onChange={e=>setNewAcct(p=>({...p,kvaDemand:e.target.value}))} placeholder="KVA" className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
                                </div>
                                <div className="md:col-span-2">
                                    <label className="text-[10px] font-bold uppercase text-slate-500 block mb-1">Notes</label>
                                    <input type="text" value={newAcct.notes} onChange={e=>setNewAcct(p=>({...p,notes:e.target.value}))} placeholder="Any notes about this account" className="w-full border rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400" />
                                </div>
                            </div>
                            <button onClick={handleAddAccount} disabled={!newAcct.acct || !newAcct.name} className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white px-6 py-2 rounded-lg font-bold text-sm transition shadow">
                                Save Account
                            </button>
                        </div>

                        {/* Existing Enriched Accounts */}
                        {Object.keys(customerEnrichment).length > 0 && (
                            <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                                <div className="p-4 bg-slate-50 border-b font-bold text-slate-800 flex justify-between items-center">
                                    <span>Enriched Accounts ({Object.keys(customerEnrichment).length})</span>
                                    <button onClick={() => {
                                        if (supabaseConfig.url && supabaseConfig.key) pushScenariosToCloud(savedVersions, varianceComments, overviewComments, accountNameMap, customerEnrichment);
                                    }} className="text-xs bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-200 font-bold flex items-center gap-1 hover:bg-blue-100 transition">
                                        <Icons.CloudUp /> Sync to Cloud
                                    </button>
                                </div>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm">
                                        <thead className="bg-slate-100">
                                            <tr>
                                                <th className="p-3 text-left font-bold text-slate-600">A/C #</th>
                                                <th className="p-3 text-left font-bold text-slate-600">Name</th>
                                                <th className="p-3 text-left font-bold text-slate-600">RC</th>
                                                <th className="p-3 text-left font-bold text-slate-600">Parish</th>
                                                <th className="p-3 text-left font-bold text-slate-600">Industry</th>
                                                <th className="p-3 text-right font-bold text-slate-600">KVA</th>
                                                <th className="p-3 text-left font-bold text-slate-600">Notes</th>
                                                <th className="p-3 w-10"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Object.entries(customerEnrichment).map(([acct, info]) => (
                                                <tr key={acct} className="border-b hover:bg-slate-50">
                                                    <td className="p-3 font-mono text-xs text-slate-600">{acct}</td>
                                                    <td className="p-3 font-bold">{info.name}</td>
                                                    <td className="p-3"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">{info.rc}</span></td>
                                                    <td className="p-3 text-slate-600">{info.parish}</td>
                                                    <td className="p-3 text-slate-600">{info.industry}</td>
                                                    <td className="p-3 text-right text-slate-600">{info.kvaDemand || '—'}</td>
                                                    <td className="p-3 text-xs text-slate-400 max-w-[200px] truncate">{info.notes}</td>
                                                    <td className="p-3 text-center">
                                                        <button onClick={() => {
                                                            const updated = {...customerEnrichment};
                                                            delete updated[acct];
                                                            setCustomerEnrichment(updated);
                                                        }} className="text-slate-300 hover:text-red-500"><Icons.Trash /></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Tariff & FX Settings */}
                        <div className="bg-white rounded-xl border shadow-sm p-5">
                            <h3 className="font-bold text-slate-800 mb-1 flex items-center gap-2"><Icons.Calculator /> Tariff Rates & FX (used for Revenue calculations)</h3>
                            <p className="text-xs text-slate-500 mb-4">2024 OUR-approved non-fuel rates in J$. Revenue = kWh × Energy Rate ÷ FX Rate</p>
                            <div className="flex items-center gap-4 mb-4">
                                <label className="text-xs font-bold text-slate-600">FX Rate (J$/US$):</label>
                                <input type="number" value={fxRate} onChange={e=>setFxRate(parseFloat(e.target.value)||162)} className="w-24 border rounded-lg px-3 py-1.5 text-sm outline-none focus:border-blue-400 text-center font-bold" />
                                <span className="text-xs text-slate-400">Default: 162 J$/US$</span>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="p-2 text-left font-bold text-slate-600">Rate Class</th>
                                            <th className="p-2 text-right font-bold text-slate-600">Energy Rate (J$/kWh)</th>
                                            <th className="p-2 text-right font-bold text-slate-600">Cust Charge (J$/mo)</th>
                                            <th className="p-2 text-right font-bold text-slate-600">Demand (J$/KVA)</th>
                                            <th className="p-2 text-right font-bold text-slate-600">Implied US¢/kWh</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.entries(tariffRates).map(([rc, rates]) => (
                                            <tr key={rc} className="border-b hover:bg-slate-50">
                                                <td className="p-2 font-bold text-blue-700">{rc}</td>
                                                <td className="p-2 text-right">
                                                    <input type="number" value={rates.energy} step="0.01"
                                                        onChange={e=>setTariffRates(p=>({...p,[rc]:{...p[rc],energy:parseFloat(e.target.value)||0}}))}
                                                        className="w-20 border rounded px-2 py-1 text-right text-sm outline-none focus:border-blue-400" />
                                                </td>
                                                <td className="p-2 text-right">
                                                    <input type="number" value={rates.custChg} step="0.01"
                                                        onChange={e=>setTariffRates(p=>({...p,[rc]:{...p[rc],custChg:parseFloat(e.target.value)||0}}))}
                                                        className="w-24 border rounded px-2 py-1 text-right text-sm outline-none focus:border-blue-400" />
                                                </td>
                                                <td className="p-2 text-right">
                                                    <input type="number" value={rates.demand} step="0.01"
                                                        onChange={e=>setTariffRates(p=>({...p,[rc]:{...p[rc],demand:parseFloat(e.target.value)||0}}))}
                                                        className="w-24 border rounded px-2 py-1 text-right text-sm outline-none focus:border-blue-400" />
                                                </td>
                                                <td className="p-2 text-right text-emerald-600 font-bold">{((rates.energy / fxRate) * 100).toFixed(2)}¢</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            };

            // ============================================================
            // TAB: SCENARIO COMPARISON
            // ============================================================
            const renderComparisonTab = () => {
                if (!isBudgetCommitted) return renderEmptyBudgetWarning();

                const fAct25 = getFiltered(actuals).filter(d=>d.year===2025);
                const fBud26 = getFiltered(budget).filter(d=>d.year===2026);
                const fLeCust = getFiltered(leCustGrowth);
                const fLeRC = getFiltered(leRCGrowth);
                const fLeBase = getFiltered(leBaseGrowth);
                const fLeCustom = getFiltered(leCustomGrowth);

                const tot = (arr) => arr.reduce((s,d)=>s+d.kwh,0);
                const rev = (arr) => arr.reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0);
                const pct = (a,b) => b ? ((a-b)/b*100).toFixed(1)+'%' : '—';
                const color = (a,b) => a>=b ? 'text-emerald-600' : 'text-red-500';

                const scenarios = [
                    { key: 'leCust',   label: 'LE Cust Vol',    data: fLeCust,   bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', head: 'bg-purple-600' },
                    { key: 'leRC',     label: 'LE RC Vol',      data: fLeRC,     bg: 'bg-blue-50',   border: 'border-blue-200',   text: 'text-blue-700',   head: 'bg-blue-600' },
                    { key: 'leBase',   label: 'LE Base',        data: fLeBase,   bg: 'bg-amber-50',  border: 'border-amber-200',  text: 'text-amber-700',  head: 'bg-amber-600' },
                    { key: 'leCustom', label: 'LE Advanced',    data: fLeCustom, bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', head: 'bg-indigo-600' },
                ];

                const bKwh = tot(fBud26); const bRev = rev(fBud26);
                const pKwh = tot(fAct25); const pRev = rev(fAct25);

                // Per RC breakdown
                const rcRows = dimensions.rcs.map(rc => {
                    const b = fBud26.filter(d=>d.rc===rc).reduce((s,d)=>s+d.kwh,0);
                    return {
                        rc,
                        bud: b,
                        budRev: fBud26.filter(d=>d.rc===rc).reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0),
                        scenarios: scenarios.map(sc => ({
                            kwh: sc.data.filter(d=>d.rc===rc).reduce((s,d)=>s+d.kwh,0),
                            rev: sc.data.filter(d=>d.rc===rc).reduce((s,d)=>s+kwhToRevUSD(d.kwh,d.rc),0),
                        }))
                    };
                }).filter(r => r.bud > 0 || r.scenarios.some(s=>s.kwh>0));

                return (
                    <div className="p-6 h-full overflow-y-auto custom-scroll space-y-6">
                        <div className="bg-white rounded-xl border p-4 shadow-sm">
                            <h2 className="text-xl font-bold text-slate-800">Scenario Comparison</h2>
                            <p className="text-sm text-slate-500">All 4 LE scenarios vs Budget and Prior Year — kWh and Revenue (US$)</p>
                        </div>

                        {/* KPI Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {scenarios.map(sc => {
                                const k = tot(sc.data); const r = rev(sc.data);
                                return (
                                    <div key={sc.key} className={`rounded-xl border p-4 shadow-sm ${sc.bg} ${sc.border}`}>
                                        <div className={`text-xs font-black uppercase tracking-wider mb-2 ${sc.text}`}>{sc.label}</div>
                                        <div className="text-2xl font-black text-slate-800">{(k/1000000).toFixed(1)}<span className="text-sm font-bold text-slate-400 ml-1">GWh</span></div>
                                        <div className={`text-sm font-bold mt-1 ${color(k,bKwh)}`}>{pct(k,bKwh)} vs Bud</div>
                                        <div className="text-lg font-black text-slate-700 mt-2">{formatUSDb(r)}</div>
                                        <div className={`text-xs font-bold ${color(r,bRev)}`}>{pct(r,bRev)} vs Bud</div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Summary Table */}
                        <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
                            <div className="p-4 bg-slate-50 border-b font-bold text-slate-800">Full Year Comparison</div>
                            <table className="w-full text-sm whitespace-nowrap">
                                <thead>
                                    <tr className="bg-slate-800 text-white">
                                        <th className="p-3 text-left">Metric</th>
                                        <th className="p-3 text-right">2025 Actual</th>
                                        <th className="p-3 text-right bg-blue-900">2026 Budget</th>
                                        {scenarios.map(sc=><th key={sc.key} className={`p-3 text-right ${sc.head} text-white`}>{sc.label}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b bg-slate-50">
                                        <td className="p-3 font-bold text-slate-600">Total kWh</td>
                                        <td className="p-3 text-right">{formatNum(pKwh)}</td>
                                        <td className="p-3 text-right font-bold text-blue-700">{formatNum(bKwh)}</td>
                                        {scenarios.map(sc=>{const k=tot(sc.data);return<td key={sc.key} className={`p-3 text-right font-bold ${sc.text}`}>{formatNum(k)}</td>;})}
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-bold text-slate-600">vs Budget %</td>
                                        <td className="p-3 text-right text-slate-400">{pct(pKwh,bKwh)}</td>
                                        <td className="p-3 text-right text-slate-400">—</td>
                                        {scenarios.map(sc=>{const k=tot(sc.data);return<td key={sc.key} className={`p-3 text-right font-bold ${color(k,bKwh)}`}>{pct(k,bKwh)}</td>;})}
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="p-3 font-bold text-slate-600">Revenue (US$)</td>
                                        <td className="p-3 text-right">{formatUSDb(pRev)}</td>
                                        <td className="p-3 text-right font-bold text-blue-700">{formatUSDb(bRev)}</td>
                                        {scenarios.map(sc=>{const r=rev(sc.data);return<td key={sc.key} className={`p-3 text-right font-bold ${sc.text}`}>{formatUSDb(r)}</td>;})}
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-bold text-slate-600">Rev vs Budget</td>
                                        <td className="p-3 text-right text-slate-400">{pct(pRev,bRev)}</td>
                                        <td className="p-3 text-right text-slate-400">—</td>
                                        {scenarios.map(sc=>{const r=rev(sc.data);return<td key={sc.key} className={`p-3 text-right font-bold ${color(r,bRev)}`}>{pct(r,bRev)}</td>;})}
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="p-3 font-bold text-slate-600">Gap to Budget (kWh)</td>
                                        <td className="p-3 text-right text-slate-400">{formatNum(pKwh-bKwh)}</td>
                                        <td className="p-3 text-right text-slate-400">—</td>
                                        {scenarios.map(sc=>{const g=tot(sc.data)-bKwh;return<td key={sc.key} className={`p-3 text-right font-bold ${g>=0?'text-emerald-600':'text-red-500'}`}>{g>0?'+':''}{formatNum(g)}</td>;})}
                                    </tr>
                                    <tr>
                                        <td className="p-3 font-bold text-slate-600">Rev Gap to Budget</td>
                                        <td className="p-3 text-right text-slate-400">{formatUSDb(pRev-bRev)}</td>
                                        <td className="p-3 text-right text-slate-400">—</td>
                                        {scenarios.map(sc=>{const g=rev(sc.data)-bRev;return<td key={sc.key} className={`p-3 text-right font-bold ${g>=0?'text-emerald-600':'text-red-500'}`}>{g>0?'+':''}{formatUSDb(g)}</td>;})}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Per RC Breakdown */}
                        <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
                            <div className="p-4 bg-slate-50 border-b font-bold text-slate-800">Revenue by Rate Class (US$)</div>
                            <table className="w-full text-sm whitespace-nowrap">
                                <thead>
                                    <tr className="bg-slate-800 text-white">
                                        <th className="p-3 text-left">RC</th>
                                        <th className="p-3 text-right bg-blue-900">Budget Rev</th>
                                        {scenarios.map(sc=><th key={sc.key} className={`p-3 text-right ${sc.head}`}>{sc.label}</th>)}
                                        <th className="p-3 text-right">Best LE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rcRows.map(row => {
                                        const bestIdx = row.scenarios.reduce((bi,s,i,arr)=>s.rev>arr[bi].rev?i:bi,0);
                                        return (
                                            <tr key={row.rc} className="border-b hover:bg-slate-50">
                                                <td className="p-3 font-bold text-blue-700">{row.rc}</td>
                                                <td className="p-3 text-right font-bold text-blue-600">{formatUSDb(row.budRev)}</td>
                                                {row.scenarios.map((s,i)=>(
                                                    <td key={i} className={`p-3 text-right font-bold ${color(s.rev,row.budRev)}`}>{formatUSDb(s.rev)}</td>
                                                ))}
                                                <td className="p-3 text-right font-black text-emerald-600">{scenarios[bestIdx].label}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot className="bg-slate-200 font-black border-t-2 sticky bottom-0">
                                    <tr>
                                        <td className="p-3">TOTAL</td>
                                        <td className="p-3 text-right text-blue-800">{formatUSDb(bRev)}</td>
                                        {scenarios.map(sc=>{const r=rev(sc.data);return<td key={sc.key} className={`p-3 text-right ${color(r,bRev)}`}>{formatUSDb(r)}</td>;})}
                                        <td className="p-3"></td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                );
            };


            // ============================================================
            // TAB: NET GENERATION & ROLLING FORECAST
            // ============================================================
            const renderNetGenTab = () => {
                if (!netGenData || !netGenData.loaded) {
                    return (
                        <div className="flex flex-col items-center justify-center h-full text-slate-500 gap-4">
                            <Icons.Wind />
                            <p className="font-bold">Loading Net Generation data from Supabase...</p>
                            <p className="text-xs text-slate-400">Ensure the net_gen_historical table exists and RLS allows reads.</p>
                        </div>
                    );
                }

                const histNetGen = netGenData.netGen;
                const histPeakMW = netGenData.peak;

                // Hurricane-normalize 2025 Nov/Dec
                const norm2025 = [...histNetGen[2025]];
                norm2025[10] = (histNetGen[2023][10] + histNetGen[2024][10]) / 2;
                norm2025[11] = (histNetGen[2023][11] + histNetGen[2024][11]) / 2;
                const normPeak2025 = [...histPeakMW[2025]];
                normPeak2025[10] = (histPeakMW[2023][10] + histPeakMW[2024][10]) / 2;
                normPeak2025[11] = (histPeakMW[2023][11] + histPeakMW[2024][11]) / 2;

                // 3-year seasonal index
                const allYears = [histNetGen[2023], histNetGen[2024], norm2025];
                const annualAvgs = allYears.map(y => y.reduce((s,v)=>s+v,0)/12);
                const seasonalIndex = monthNames.map((_,m) => {
                    const indices = allYears.map((yr,i) => yr[m] / annualAvgs[i]);
                    return indices.reduce((s,v)=>s+v,0) / 3;
                });

                const [sysLossPct, setSysLossPct] = React.useState(26.0);
                const [growthMethod, setGrowthMethod] = React.useState('seasonal');
                const [flatGrowth, setFlatGrowth] = React.useState(0.5);
                const [manualMonthly, setManualMonthly] = React.useState(Array(12).fill(0));
                const [forecastBase, setForecastBase] = React.useState('norm2025');
                const [peakGrowthPct, setPeakGrowthPct] = React.useState(1.0);
                const [showNormalized, setShowNormalized] = React.useState(true);

                const avg3yr = monthNames.map((_,m) =>
                    (histNetGen[2023][m] + histNetGen[2024][m] + norm2025[m]) / 3
                );
                const baseYear = forecastBase === 'norm2025' ? norm2025 : avg3yr;
                const basePeak = forecastBase === 'norm2025' ? normPeak2025 :
                    monthNames.map((_,m) => (histPeakMW[2023][m]+histPeakMW[2024][m]+normPeak2025[m])/3);

                const forecastNetGen = monthNames.map((_,m) => {
                    if (growthMethod === 'flat') return baseYear[m] * (1 + flatGrowth/100);
                    if (growthMethod === 'manual') return baseYear[m] * (1 + (manualMonthly[m]||0)/100);
                    const annualBase = baseYear.reduce((s,v)=>s+v,0);
                    const targetAnnual = annualBase * (1 + flatGrowth/100);
                    const wtAvgIdx = seasonalIndex.reduce((s,v)=>s+v,0)/12;
                    return (targetAnnual / 12) * (seasonalIndex[m] / wtAvgIdx);
                });
                const forecastPeak = monthNames.map((_,m) => basePeak[m] * (1 + peakGrowthPct/100));
                const forecastBilled = forecastNetGen.map(v => v * (1 - sysLossPct/100));
                const daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
                const loadFactor = forecastNetGen.map((ng,m) => forecastPeak[m] > 0 ? (ng/(forecastPeak[m]*daysInMonth[m]*24))*100 : 0);

                const totFcstNG = forecastNetGen.reduce((s,v)=>s+v,0);
                const totFcstBilled = forecastBilled.reduce((s,v)=>s+v,0);
                const totBase = baseYear.reduce((s,v)=>s+v,0);
                const yoyPct = totBase > 0 ? (totFcstNG - totBase) / totBase * 100 : 0;

                const chartData = monthNames.map((name,m) => ({
                    month: name.substring(0,3),
                    'Net Gen 2023': Math.round(histNetGen[2023][m]),
                    'Net Gen 2024': Math.round(histNetGen[2024][m]),
                    'Net Gen 2025': showNormalized ? Math.round(norm2025[m]) : Math.round(histNetGen[2025][m]),
                    'Forecast 2026': Math.round(forecastNetGen[m]),
                    'Billed Sales 2026': Math.round(forecastBilled[m]),
                }));

                const peakChartData = monthNames.map((name,m) => ({
                    month: name.substring(0,3),
                    '2023': Math.round(histPeakMW[2023][m]),
                    '2024': Math.round(histPeakMW[2024][m]),
                    '2025': showNormalized ? Math.round(normPeak2025[m]) : Math.round(histPeakMW[2025][m]),
                    'Forecast 2026': Math.round(forecastPeak[m]*10)/10,
                }));

                return (
                    <div className="p-6 h-full overflow-y-auto custom-scroll space-y-6">
                        <div className="bg-white rounded-xl border p-5 shadow-sm flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Icons.Wind /> Net Generation & 12-Month Rolling Forecast</h2>
                                <p className="text-sm text-slate-500 mt-1">Historical 2023–2025 actuals + 2026 projection. Net Gen → Billed Sales via System Loss %.</p>
                            </div>
                            <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
                                <input type="checkbox" checked={showNormalized} onChange={e=>setShowNormalized(e.target.checked)} className="w-4 h-4" />
                                Hurricane-normalize 2025
                            </label>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="bg-white rounded-xl border p-4 shadow-sm">
                                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">2026 Net Gen (MWh)</div>
                                <div className="text-2xl font-black text-slate-800">{(totFcstNG/1000).toFixed(0)}<span className="text-sm font-bold text-slate-400 ml-1">GWh</span></div>
                                <div className={`text-xs font-bold mt-1 ${yoyPct>=0?'text-emerald-600':'text-red-500'}`}>{yoyPct>0?'+':''}{yoyPct.toFixed(1)}% vs base</div>
                            </div>
                            <div className="bg-white rounded-xl border p-4 shadow-sm">
                                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Billed Sales (MWh)</div>
                                <div className="text-2xl font-black text-blue-700">{(totFcstBilled/1000).toFixed(0)}<span className="text-sm font-bold text-blue-400 ml-1">GWh</span></div>
                                <div className="text-xs text-slate-400 mt-1">@ {sysLossPct}% system loss</div>
                            </div>
                            <div className="bg-white rounded-xl border p-4 shadow-sm">
                                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">System Loss (MWh)</div>
                                <div className="text-2xl font-black text-amber-600">{((totFcstNG-totFcstBilled)/1000).toFixed(0)}<span className="text-sm font-bold text-amber-400 ml-1">GWh</span></div>
                                <div className="text-xs text-slate-400 mt-1">{sysLossPct}% of Net Gen</div>
                            </div>
                            <div className="bg-white rounded-xl border p-4 shadow-sm">
                                <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">2025 Actual (Norm)</div>
                                <div className="text-2xl font-black text-slate-600">{(norm2025.reduce((s,v)=>s+v,0)/1000).toFixed(0)}<span className="text-sm font-bold text-slate-400 ml-1">GWh</span></div>
                                <div className="text-xs text-slate-400 mt-1">vs {(histNetGen[2025].reduce((s,v)=>s+v,0)/1000).toFixed(0)} raw</div>
                            </div>
                            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 shadow-sm">
                                <div className="text-[10px] font-bold text-emerald-600 uppercase mb-1">1% Loss Reduction =</div>
                                <div className="text-2xl font-black text-emerald-700">{formatUSDb(totFcstNG * 0.01 * (tariffRates['RT40'].energy / fxRate))}</div>
                                <div className="text-xs text-emerald-600 mt-1">additional revenue</div>
                            </div>
                        </div>

                        <div className="bg-slate-800 text-white rounded-xl p-5 shadow-sm">
                            <h3 className="font-bold mb-4 flex items-center gap-2 text-slate-200"><Icons.Sliders /> Forecast Assumptions</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Forecast Base Year</label>
                                    <select value={forecastBase} onChange={e=>setForecastBase(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white outline-none">
                                        <option value="norm2025">2025 Normalized</option>
                                        <option value="avg3yr">3-Year Average</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Growth Method</label>
                                    <select value={growthMethod} onChange={e=>setGrowthMethod(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white outline-none">
                                        <option value="seasonal">Seasonal Index + Growth</option>
                                        <option value="flat">Flat YoY Growth %</option>
                                        <option value="manual">Manual per Month</option>
                                    </select>
                                </div>
                                {growthMethod !== 'manual' && (
                                    <div>
                                        <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Annual Growth %</label>
                                        <div className="flex items-center gap-2">
                                            <input type="range" min="-5" max="10" step="0.1" value={flatGrowth} onChange={e=>setFlatGrowth(parseFloat(e.target.value))} className="flex-1" />
                                            <span className="text-sm font-black text-white w-12 text-right">{flatGrowth>0?'+':''}{flatGrowth.toFixed(1)}%</span>
                                        </div>
                                    </div>
                                )}
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">System Loss %</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="15" max="35" step="0.1" value={sysLossPct} onChange={e=>setSysLossPct(parseFloat(e.target.value))} className="flex-1" />
                                        <span className="text-sm font-black text-amber-400 w-12 text-right">{sysLossPct.toFixed(1)}%</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Peak Demand Growth %</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="-5" max="10" step="0.1" value={peakGrowthPct} onChange={e=>setPeakGrowthPct(parseFloat(e.target.value))} className="flex-1" />
                                        <span className="text-sm font-black text-white w-12 text-right">{peakGrowthPct>0?'+':''}{peakGrowthPct.toFixed(1)}%</span>
                                    </div>
                                </div>
                            </div>
                            {growthMethod === 'manual' && (
                                <div className="mt-4 pt-4 border-t border-slate-700">
                                    <div className="text-[10px] font-bold uppercase text-slate-400 mb-2">Monthly Growth % Override</div>
                                    <div className="grid grid-cols-6 md:grid-cols-12 gap-2">
                                        {monthNames.map((m,i) => (
                                            <div key={m} className="text-center">
                                                <div className="text-[9px] text-slate-400 mb-1">{m.substring(0,3)}</div>
                                                <input type="number" value={manualMonthly[i]} step="0.1"
                                                    onChange={e => { const n=[...manualMonthly]; n[i]=parseFloat(e.target.value)||0; setManualMonthly(n); }}
                                                    className="w-full bg-slate-700 border border-slate-600 rounded px-1 py-1 text-xs text-center text-white outline-none" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="bg-white rounded-xl border p-5 shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icons.TrendingUp /> Net Generation — Historical vs 2026 Forecast (MWh)</h3>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="month" tick={{fontSize:11}} />
                                        <YAxis tickFormatter={v=>(v/1000).toFixed(0)+'k'} tick={{fontSize:11}} />
                                        <Tooltip formatter={v=>formatNum(v)} contentStyle={{borderRadius:'8px',border:'none',boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                                        <Legend wrapperStyle={{paddingTop:'8px'}} />
                                        <Line type="monotone" dataKey="Net Gen 2023" stroke="#94a3b8" strokeDasharray="4 4" dot={false} strokeWidth={1.5} />
                                        <Line type="monotone" dataKey="Net Gen 2024" stroke="#64748b" strokeDasharray="4 4" dot={false} strokeWidth={1.5} />
                                        <Line type="monotone" dataKey="Net Gen 2025" stroke="#475569" dot={false} strokeWidth={2} />
                                        <Line type="monotone" dataKey="Forecast 2026" stroke="#3b82f6" strokeWidth={3} dot={{r:4,fill:'#3b82f6'}} />
                                        <Line type="monotone" dataKey="Billed Sales 2026" stroke="#10b981" strokeWidth={2} strokeDasharray="6 3" dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border shadow-sm overflow-x-auto">
                            <div className="p-4 bg-slate-50 border-b flex justify-between items-center">
                                <h3 className="font-bold text-slate-800">12-Month Rolling Forecast Detail</h3>
                                <button onClick={() => {
                                    const rows = monthNames.map((m,i) => ({
                                        Month: m,
                                        Net_Gen_2023: Math.round(histNetGen[2023][i]),
                                        Net_Gen_2024: Math.round(histNetGen[2024][i]),
                                        Net_Gen_2025_Raw: Math.round(histNetGen[2025][i]),
                                        Net_Gen_2025_Norm: Math.round(norm2025[i]),
                                        Forecast_2026_NetGen: Math.round(forecastNetGen[i]),
                                        Forecast_2026_Billed: Math.round(forecastBilled[i]),
                                        System_Loss_MWh: Math.round(forecastNetGen[i]-forecastBilled[i]),
                                        Peak_MW_2026: forecastPeak[i].toFixed(1),
                                        Load_Factor_Pct: loadFactor[i].toFixed(1),
                                    }));
                                    exportCSV(rows, 'JPS_NetGen_Forecast_2026.csv');
                                }} className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 border border-blue-200 transition">
                                    <Icons.Download /> Export CSV
                                </button>
                            </div>
                            <table className="w-full text-sm whitespace-nowrap">
                                <thead>
                                    <tr className="bg-slate-100">
                                        <th className="p-3 text-left font-bold border-r table-pin-col bg-slate-100 z-20">Month</th>
                                        <th className="p-3 text-right text-slate-500">2023 Act</th>
                                        <th className="p-3 text-right text-slate-500">2024 Act</th>
                                        <th className="p-3 text-right text-slate-600">2025 Raw</th>
                                        <th className="p-3 text-right text-slate-700 bg-slate-50">2025 Norm</th>
                                        <th className="p-3 text-right text-[10px] text-slate-400">Seas. Idx</th>
                                        <th className="p-3 text-right font-bold text-blue-800 bg-blue-50 border-l-2 border-blue-200">2026 Net Gen</th>
                                        <th className="p-3 text-right font-bold text-emerald-700 bg-emerald-50">Billed Sales</th>
                                        <th className="p-3 text-right text-amber-600 bg-amber-50">Sys Loss</th>
                                        <th className="p-3 text-right text-purple-600">Peak MW</th>
                                        <th className="p-3 text-right text-slate-500">Load Factor</th>
                                        <th className={`p-3 text-right font-bold border-l border-slate-200`}>YoY vs Norm</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {monthNames.map((m,i) => {
                                        const yoy = norm2025[i]>0?(forecastNetGen[i]-norm2025[i])/norm2025[i]*100:0;
                                        const isHurricane = i >= 10 && histNetGen[2025][i] < norm2025[i] * 0.9;
                                        return (
                                            <tr key={m} className="border-b hover:bg-slate-50">
                                                <td className="p-3 font-bold border-r table-pin-col bg-white z-10">{m.substring(0,3)}</td>
                                                <td className="p-3 text-right text-slate-400 text-xs">{formatNum(histNetGen[2023][i])}</td>
                                                <td className="p-3 text-right text-slate-400 text-xs">{formatNum(histNetGen[2024][i])}</td>
                                                <td className="p-3 text-right text-slate-500">
                                                    {formatNum(histNetGen[2025][i])}
                                                    {isHurricane && <span className="ml-1 text-[9px] bg-amber-100 text-amber-700 px-1 rounded font-bold">HURR</span>}
                                                </td>
                                                <td className="p-3 text-right text-slate-700 bg-slate-50 font-medium">{formatNum(Math.round(norm2025[i]))}</td>
                                                <td className="p-3 text-right text-[11px] text-slate-400">{seasonalIndex[i].toFixed(3)}</td>
                                                <td className="p-3 text-right font-black text-blue-800 bg-blue-50 border-l-2 border-blue-200">{formatNum(Math.round(forecastNetGen[i]))}</td>
                                                <td className="p-3 text-right font-bold text-emerald-700 bg-emerald-50">{formatNum(Math.round(forecastBilled[i]))}</td>
                                                <td className="p-3 text-right text-amber-600 bg-amber-50">{formatNum(Math.round(forecastNetGen[i]-forecastBilled[i]))}</td>
                                                <td className="p-3 text-right text-purple-600 font-bold">{forecastPeak[i].toFixed(1)}</td>
                                                <td className="p-3 text-right text-slate-500">{loadFactor[i].toFixed(1)}%</td>
                                                <td className={`p-3 text-right font-bold border-l border-slate-200 ${yoy>=0?'text-emerald-600':'text-red-500'}`}>{yoy>0?'+':''}{yoy.toFixed(1)}%</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                                <tfoot className="bg-slate-200 font-black border-t-2 sticky bottom-0 z-10">
                                    <tr>
                                        <td className="p-3 border-r table-pin-col bg-slate-200 z-20">TOTAL</td>
                                        <td className="p-3 text-right text-xs">{formatNum(histNetGen[2023].reduce((s,v)=>s+v,0))}</td>
                                        <td className="p-3 text-right text-xs">{formatNum(histNetGen[2024].reduce((s,v)=>s+v,0))}</td>
                                        <td className="p-3 text-right">{formatNum(histNetGen[2025].reduce((s,v)=>s+v,0))}</td>
                                        <td className="p-3 text-right bg-slate-300">{formatNum(Math.round(norm2025.reduce((s,v)=>s+v,0)))}</td>
                                        <td className="p-3"></td>
                                        <td className="p-3 text-right text-blue-900 bg-blue-100 border-l-2 border-blue-300">{formatNum(Math.round(totFcstNG))}</td>
                                        <td className="p-3 text-right text-emerald-800 bg-emerald-100">{formatNum(Math.round(totFcstBilled))}</td>
                                        <td className="p-3 text-right text-amber-700 bg-amber-100">{formatNum(Math.round(totFcstNG-totFcstBilled))}</td>
                                        <td className="p-3 text-right text-purple-700">{Math.max(...forecastPeak).toFixed(1)} pk</td>
                                        <td className="p-3 text-right">{(loadFactor.reduce((s,v)=>s+v,0)/12).toFixed(1)}%</td>
                                        <td className={`p-3 text-right border-l ${yoyPct>=0?'text-emerald-700':'text-red-600'}`}>{yoyPct>0?'+':''}{yoyPct.toFixed(1)}%</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>

                        <div className="bg-white rounded-xl border p-5 shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icons.Activity /> Peak Demand — Historical vs 2026 Forecast (MW)</h3>
                            <div className="h-[250px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={peakChartData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="month" tick={{fontSize:11}} />
                                        <YAxis domain={['auto','auto']} tick={{fontSize:11}} />
                                        <Tooltip contentStyle={{borderRadius:'8px',border:'none',boxShadow:'0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                                        <Legend wrapperStyle={{paddingTop:'8px'}} />
                                        <Line type="monotone" dataKey="2023" stroke="#94a3b8" strokeDasharray="4 4" dot={false} strokeWidth={1.5} />
                                        <Line type="monotone" dataKey="2024" stroke="#64748b" strokeDasharray="4 4" dot={false} strokeWidth={1.5} />
                                        <Line type="monotone" dataKey="2025" stroke="#475569" dot={false} strokeWidth={2} />
                                        <Line type="monotone" dataKey="Forecast 2026" stroke="#8b5cf6" strokeWidth={3} dot={{r:4,fill:'#8b5cf6'}} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border p-5 shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Icons.Calculator /> System Loss Sensitivity</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-100">
                                        <tr>
                                            <th className="p-3 text-left font-bold">System Loss %</th>
                                            <th className="p-3 text-right font-bold">Billed Sales (GWh)</th>
                                            <th className="p-3 text-right font-bold">vs Base (GWh)</th>
                                            <th className="p-3 text-right font-bold">Incremental Revenue (US$)</th>
                                            <th className="p-3 text-right font-bold">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[28,27,26,25,24,23,22].map(loss => {
                                            const billed = totFcstNG*(1-loss/100);
                                            const delta = billed - totFcstBilled;
                                            const blendedRate = Object.values(tariffRates).reduce((s,r)=>s+r.energy,0)/Object.keys(tariffRates).length;
                                            const revDelta = (delta*blendedRate)/fxRate;
                                            const isBase = Math.abs(loss-sysLossPct)<0.01;
                                            return (
                                                <tr key={loss} className={`border-b ${isBase?'bg-blue-50 font-bold':'hover:bg-slate-50'}`}>
                                                    <td className="p-3 font-bold">{loss}%{isBase&&<span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded font-bold">Base</span>}</td>
                                                    <td className="p-3 text-right">{(billed/1000).toFixed(1)}</td>
                                                    <td className={`p-3 text-right font-bold ${delta>0?'text-emerald-600':delta<0?'text-red-500':'text-slate-400'}`}>{delta>0?'+':''}{(delta/1000).toFixed(1)}</td>
                                                    <td className={`p-3 text-right font-bold ${revDelta>0?'text-emerald-600':revDelta<0?'text-red-500':'text-slate-400'}`}>{revDelta>0?'+':''}{formatUSDb(revDelta)}</td>
                                                    <td className="p-3 text-right"><span className={`text-xs px-2 py-0.5 rounded font-bold ${loss<=24?'bg-emerald-100 text-emerald-700':loss<=26?'bg-amber-100 text-amber-700':'bg-red-100 text-red-700'}`}>{loss<=24?'Best Practice':loss<=26?'Current Range':'Above Target'}</span></td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            };

            // ============================================================
            // TAB: ROLLING 18-MONTH FORECAST
            // ============================================================
            const renderRolling18Tab = () => {
                if (!netGenData || !netGenData.loaded) {
                    return (
                        <div className="flex flex-col items-center justify-center h-full text-slate-500 gap-4">
                            <Icons.TrendingUp />
                            <p className="font-bold">Loading Net Generation data from Supabase...</p>
                        </div>
                    );
                }

                const histNetGen = netGenData.netGen;
                const norm2025 = [...histNetGen[2025]];
                norm2025[10] = (histNetGen[2023][10] + histNetGen[2024][10]) / 2;
                norm2025[11] = (histNetGen[2023][11] + histNetGen[2024][11]) / 2;

                const allYrs = [histNetGen[2023], histNetGen[2024], norm2025];
                const annAvgs = allYrs.map(y => y.reduce((s,v)=>s+v,0)/12);
                const seasIdx = Array(12).fill(0).map((_,m) => {
                    const idxs = allYrs.map((yr,i) => yr[m]/annAvgs[i]);
                    return idxs.reduce((s,v)=>s+v,0)/3;
                });

                const [r18SysLoss, setR18SysLoss] = React.useState(26.0);
                const [r18Growth26, setR18Growth26] = React.useState(0.5);
                const [r18Growth27, setR18Growth27] = React.useState(1.5);
                const [r18Base, setR18Base] = React.useState('norm2025');
                const [r18ShowRevenue, setR18ShowRevenue] = React.useState(true);

                const baseRef = r18Base === 'norm2025' ? norm2025 :
                    Array(12).fill(0).map((_,m)=>(histNetGen[2023][m]+histNetGen[2024][m]+norm2025[m])/3);

                const actualsBilledByMonth = {};
                actuals.filter(a => a.year === 2026).forEach(a => {
                    actualsBilledByMonth[a.month] = (actualsBilledByMonth[a.month]||0) + a.kwh/1000;
                });
                const maxActMonth = Math.max(0, ...actuals.filter(a=>a.year===2026).map(a=>a.month));

                const wtAvgIdx = seasIdx.reduce((s,v)=>s+v,0)/12;
                const getFcstNG = (mIdx, yr) => {
                    const annBase = baseRef.reduce((s,v)=>s+v,0);
                    const g = yr === 2026 ? r18Growth26 : r18Growth27;
                    return (annBase*(1+g/100)/12) * (seasIdx[mIdx]/wtAvgIdx);
                };

                const lockedActuals = [1,2,3].map(mNum => {
                    const mIdx = mNum-1;
                    const billedMwh = actualsBilledByMonth[mNum]||0;
                    const netGenEst = billedMwh>0 ? billedMwh/(1-r18SysLoss/100) : getFcstNG(mIdx,2026);
                    const blendedRate = Object.values(tariffRates).reduce((s,r)=>s+r.energy,0)/Object.keys(tariffRates).length;
                    const revUSD = (billedMwh*1000*blendedRate)/fxRate;
                    const budBilledMwh = budget.filter(b=>b.year===2026&&b.month===mNum).reduce((s,d)=>s+d.kwh,0)/1000;
                    return { label:`${monthNames[mIdx].substring(0,3)} 2026`, mIdx, mNum, yr:2026,
                        netGen:netGenEst, billed:billedMwh, revUSD, budBilledMwh,
                        sysLoss:netGenEst-billedMwh, varBud:budBilledMwh>0?billedMwh-budBilledMwh:null };
                });

                const fcstRows = [];
                for (let i=0; i<18; i++) {
                    const yr = i<9?2026:2027;
                    const mIdx = i<9?i+3:i-9;
                    const mNum = mIdx+1;
                    const label = `${monthNames[mIdx].substring(0,3)} ${yr}`;
                    const ng = getFcstNG(mIdx,yr);
                    const billed = ng*(1-r18SysLoss/100);
                    const blendedRate = Object.values(tariffRates).reduce((s,r)=>s+r.energy,0)/Object.keys(tariffRates).length;
                    const revUSD = (billed*1000*blendedRate)/fxRate;
                    const budBilledMwh = budget.filter(b=>b.year===2026&&b.month===mNum).reduce((s,d)=>s+d.kwh,0)/1000;
                    const pyNG = yr===2026?norm2025[mIdx]:getFcstNG(mIdx,2026);
                    const yoyPct = pyNG>0?(ng-pyNG)/pyNG*100:0;
                    const g = yr===2026?r18Growth26:r18Growth27;
                    fcstRows.push({i,yr,mIdx,mNum,label,ng,billed,revUSD,budBilledMwh,
                        varBud:budBilledMwh>0?billed-budBilledMwh:null,yoyPct,g});
                }

                const fcst2026 = fcstRows.filter(r=>r.yr===2026);
                const fcst2027 = fcstRows.filter(r=>r.yr===2027);
                const sumNG  = arr => arr.reduce((s,r)=>s+r.ng,0);
                const sumBil = arr => arr.reduce((s,r)=>s+r.billed,0);
                const sumRev = arr => arr.reduce((s,r)=>s+r.revUSD,0);

                const chartData = [
                    ...lockedActuals.map(r=>({label:r.label,'Net Gen':Math.round(r.netGen),'Billed Sales':Math.round(r.billed),'Revenue ($k)':Math.round(r.revUSD/1000),type:'actual'})),
                    ...fcstRows.map(r=>({label:r.label,'Net Gen':Math.round(r.ng),'Billed Sales':Math.round(r.billed),'Revenue ($k)':Math.round(r.revUSD/1000),type:r.yr===2027?'fcst27':'fcst26'})),
                ];

                return (
                    <div className="p-6 h-full overflow-y-auto custom-scroll space-y-6">
                        <div className="bg-white rounded-xl border p-5 shadow-sm flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Icons.TrendingUp /> Rolling 18-Month Forecast</h2>
                                <p className="text-sm text-slate-500 mt-1">
                                    <span className="font-bold text-blue-700">Actuals locked: Jan–Mar 2026</span>
                                    <span className="mx-2 text-slate-300">·</span>
                                    <span className="font-bold text-emerald-700">Forecast: Apr 2026 → Sep 2027</span>
                                </p>
                            </div>
                            <label className="flex items-center gap-2 text-xs font-bold text-slate-600 cursor-pointer">
                                <input type="checkbox" checked={r18ShowRevenue} onChange={e=>setR18ShowRevenue(e.target.checked)} className="w-4 h-4" />Show Revenue bars
                            </label>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                {label:'Actuals Q1 2026',billed:lockedActuals.reduce((s,r)=>s+r.billed,0),rev:lockedActuals.reduce((s,r)=>s+r.revUSD,0),color:'blue',tag:'LOCKED'},
                                {label:'Forecast Apr–Dec 2026',billed:sumBil(fcst2026),rev:sumRev(fcst2026),color:'emerald',tag:'9M FCST'},
                                {label:'Forecast Jan–Sep 2027',billed:sumBil(fcst2027),rev:sumRev(fcst2027),color:'purple',tag:'9M FCST'},
                                {label:'18-Month Fcst Total',billed:sumBil(fcstRows),rev:sumRev(fcstRows),color:'amber',tag:'18M'},
                            ].map((kpi,ki)=>(
                                <div key={ki} className={`bg-white rounded-xl border p-4 shadow-sm border-l-4 ${kpi.color==='blue'?'border-l-blue-500':kpi.color==='emerald'?'border-l-emerald-500':kpi.color==='purple'?'border-l-purple-500':'border-l-amber-500'}`}>
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="text-[10px] font-bold text-slate-400 uppercase">{kpi.label}</div>
                                        <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-full ${kpi.color==='blue'?'bg-blue-100 text-blue-700':kpi.color==='emerald'?'bg-emerald-100 text-emerald-700':kpi.color==='purple'?'bg-purple-100 text-purple-700':'bg-amber-100 text-amber-700'}`}>{kpi.tag}</span>
                                    </div>
                                    <div className="text-lg font-black text-slate-800">{(kpi.billed/1000).toFixed(1)} <span className="text-xs font-bold text-slate-400">GWh Billed</span></div>
                                    <div className="text-sm font-bold text-blue-600 mt-1">{formatUSDb(kpi.rev)} <span className="text-xs font-normal text-slate-400">Revenue</span></div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-slate-800 text-white rounded-xl p-5 shadow-sm">
                            <h3 className="font-bold mb-4 text-slate-200 flex items-center gap-2"><Icons.Sliders /> Forecast Assumptions (Apr 2026 – Sep 2027)</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">Base Year</label>
                                    <select value={r18Base} onChange={e=>setR18Base(e.target.value)} className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-sm text-white outline-none">
                                        <option value="norm2025">2025 Normalized</option>
                                        <option value="avg3yr">3-Year Average</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">2026 Growth %</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="-5" max="10" step="0.1" value={r18Growth26} onChange={e=>setR18Growth26(parseFloat(e.target.value))} className="flex-1" />
                                        <span className="text-sm font-black text-emerald-400 w-12 text-right">{r18Growth26>0?'+':''}{r18Growth26.toFixed(1)}%</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">2027 Growth %</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="-5" max="10" step="0.1" value={r18Growth27} onChange={e=>setR18Growth27(parseFloat(e.target.value))} className="flex-1" />
                                        <span className="text-sm font-black text-purple-400 w-12 text-right">{r18Growth27>0?'+':''}{r18Growth27.toFixed(1)}%</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-[10px] font-bold uppercase text-slate-400 block mb-1">System Loss %</label>
                                    <div className="flex items-center gap-2">
                                        <input type="range" min="15" max="35" step="0.1" value={r18SysLoss} onChange={e=>setR18SysLoss(parseFloat(e.target.value))} className="flex-1" />
                                        <span className="text-sm font-black text-amber-400 w-12 text-right">{r18SysLoss.toFixed(1)}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border p-5 shadow-sm">
                            <h3 className="font-bold text-slate-800 mb-1">Net Gen & Billed Sales — Q1 Actuals + 18-Month Forecast (MWh)</h3>
                            <div className="flex items-center gap-6 text-xs text-slate-500 mb-4">
                                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-blue-800 inline-block"></span> Jan–Mar 2026 Actuals</span>
                                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-emerald-500 inline-block"></span> Apr–Dec 2026 Forecast</span>
                                <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-purple-500 inline-block"></span> Jan–Sep 2027 Forecast</span>
                            </div>
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData} barGap={1} barCategoryGap="20%">
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="label" tick={{fontSize:9}} interval={0} angle={-40} textAnchor="end" height={55} />
                                        <YAxis yAxisId="mwh" tickFormatter={v=>(v/1000).toFixed(0)+'k'} tick={{fontSize:10}} />
                                        {r18ShowRevenue && <YAxis yAxisId="rev" orientation="right" tickFormatter={v=>'$'+v+'k'} tick={{fontSize:10}} />}
                                        <Tooltip formatter={(v,n)=>n.includes('Revenue')?'US$'+formatNum(v)+'k':formatNum(v)+' MWh'} contentStyle={{borderRadius:'8px',border:'none',boxShadow:'0 4px 6px -1px rgb(0 0 0/0.1)'}} />
                                        <Bar yAxisId="mwh" dataKey="Net Gen" radius={[3,3,0,0]}>
                                            {chartData.map((d,i)=><Cell key={i} fill={d.type==='actual'?'#1d4ed8':d.type==='fcst27'?'#7c3aed':'#3b82f6'} />)}
                                        </Bar>
                                        <Bar yAxisId="mwh" dataKey="Billed Sales" radius={[3,3,0,0]}>
                                            {chartData.map((d,i)=><Cell key={i} fill={d.type==='actual'?'#065f46':d.type==='fcst27'?'#6d28d9':'#10b981'} />)}
                                        </Bar>
                                        {r18ShowRevenue && <Bar yAxisId="rev" dataKey="Revenue ($k)" fill="#f59e0b" opacity={0.65} radius={[3,3,0,0]} />}
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-xl overflow-hidden shadow-sm">
                            <div className="p-4 bg-blue-700 text-white font-bold text-sm flex items-center gap-2">
                                <Icons.CheckCircle /> Locked Actuals — Jan–Mar 2026
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead><tr className="bg-blue-100 text-blue-800">
                                        <th className="p-3 text-left font-bold">Period</th>
                                        <th className="p-3 text-right font-bold">Net Gen Est.</th>
                                        <th className="p-3 text-right font-bold">Billed Sales</th>
                                        <th className="p-3 text-right font-bold">Sys Loss</th>
                                        <th className="p-3 text-right font-bold">Budget Billed</th>
                                        <th className="p-3 text-right font-bold">Var vs Budget</th>
                                        <th className="p-3 text-right font-bold">Revenue (US$)</th>
                                    </tr></thead>
                                    <tbody>
                                        {lockedActuals.map((r,i)=>(
                                            <tr key={i} className="border-b border-blue-200 hover:bg-blue-100/50">
                                                <td className="p-3 font-bold text-blue-900">{r.label} <span className="ml-2 text-[9px] bg-blue-200 text-blue-800 px-1.5 py-0.5 rounded-full font-black">ACT</span></td>
                                                <td className="p-3 text-right text-slate-600">{r.netGen>0?formatNum(Math.round(r.netGen)):'—'}</td>
                                                <td className="p-3 text-right font-bold text-blue-800">{formatNum(Math.round(r.billed))}</td>
                                                <td className="p-3 text-right text-amber-700">{r.netGen>0?formatNum(Math.round(r.sysLoss)):'—'}</td>
                                                <td className="p-3 text-right text-slate-500">{r.budBilledMwh>0?formatNum(Math.round(r.budBilledMwh)):'—'}</td>
                                                <td className={`p-3 text-right font-bold ${r.varBud===null?'text-slate-300':r.varBud>=0?'text-emerald-600':'text-red-500'}`}>{r.varBud===null?'—':`${r.varBud>0?'+':''}${formatNum(Math.round(r.varBud))}`}</td>
                                                <td className="p-3 text-right font-bold text-blue-800">{formatUSDb(r.revUSD)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot className="bg-blue-200 font-black">
                                        <tr>
                                            <td className="p-3 text-blue-900">Q1 2026 TOTAL</td>
                                            <td className="p-3 text-right text-slate-600">{formatNum(Math.round(lockedActuals.reduce((s,r)=>s+r.netGen,0)))}</td>
                                            <td className="p-3 text-right text-blue-900">{formatNum(Math.round(lockedActuals.reduce((s,r)=>s+r.billed,0)))}</td>
                                            <td className="p-3 text-right text-amber-700">{formatNum(Math.round(lockedActuals.reduce((s,r)=>s+r.sysLoss,0)))}</td>
                                            <td className="p-3 text-right">{formatNum(Math.round(lockedActuals.reduce((s,r)=>s+r.budBilledMwh,0)))}</td>
                                            <td className={`p-3 text-right ${lockedActuals.reduce((s,r)=>s+(r.varBud||0),0)>=0?'text-emerald-700':'text-red-600'}`}>{(()=>{const v=lockedActuals.reduce((s,r)=>s+(r.varBud||0),0);return `${v>0?'+':''}${formatNum(Math.round(v))}`})()}</td>
                                            <td className="p-3 text-right text-blue-900">{formatUSDb(lockedActuals.reduce((s,r)=>s+r.revUSD,0))}</td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl border shadow-sm overflow-hidden">
                            <div className="p-4 bg-slate-50 border-b flex justify-between items-center">
                                <div>
                                    <h3 className="font-bold text-slate-800">18-Month Forecast — Apr 2026 → Sep 2027</h3>
                                    <p className="text-xs text-slate-400 mt-0.5">Apr–Dec 2026 +{r18Growth26.toFixed(1)}% · Jan–Sep 2027 +{r18Growth27.toFixed(1)}% · {r18SysLoss.toFixed(1)}% system loss</p>
                                </div>
                                <button onClick={() => {
                                    const allRows = [
                                        ...lockedActuals.map(r=>({Period:r.label,Type:'Actual',Net_Gen_MWh:Math.round(r.netGen),Billed_MWh:Math.round(r.billed),Revenue_USD:Math.round(r.revUSD)})),
                                        ...fcstRows.map(r=>({Period:r.label,Type:r.yr===2027?'Forecast 2027':'Forecast 2026',Net_Gen_MWh:Math.round(r.ng),Billed_MWh:Math.round(r.billed),Revenue_USD:Math.round(r.revUSD),YoY_Pct:r.yoyPct.toFixed(1)+'%'}))
                                    ];
                                    exportCSV(allRows,'JPS_Rolling18M_Apr2026_Sep2027.csv');
                                }} className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 border border-blue-200 transition">
                                    <Icons.Download /> Export CSV
                                </button>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm whitespace-nowrap">
                                    <thead><tr className="bg-slate-100 text-slate-600">
                                        <th className="p-3 text-left font-bold border-r table-pin-col bg-slate-100 z-20">Period</th>
                                        <th className="p-3 text-right font-bold text-blue-700 bg-blue-50 border-l-2 border-blue-200">Net Gen (MWh)</th>
                                        <th className="p-3 text-right font-bold text-emerald-700 bg-emerald-50">Billed (MWh)</th>
                                        <th className="p-3 text-right text-amber-600 bg-amber-50">Sys Loss</th>
                                        <th className="p-3 text-right text-amber-600 bg-amber-50">Loss %</th>
                                        <th className="p-3 text-right text-slate-500 border-l border-slate-200">Budget Billed</th>
                                        <th className="p-3 text-right font-bold">Var vs Bud</th>
                                        <th className="p-3 text-right font-bold text-blue-700 bg-blue-50 border-l-2 border-blue-200">Revenue (US$)</th>
                                        <th className="p-3 text-right">YoY %</th>
                                    </tr></thead>
                                    <tbody>
                                        {fcstRows.map((r,i) => {
                                            const isYrBreak = i===9;
                                            return (
                                                <React.Fragment key={r.label}>
                                                    {isYrBreak && <tr className="bg-purple-900"><td colSpan="9" className="p-2 text-center text-[11px] font-black text-purple-200 uppercase tracking-widest">── 2027 Forecast · +{r18Growth27.toFixed(1)}% ──</td></tr>}
                                                    <tr className={`border-b transition ${r.yr===2027?'bg-purple-50/40 hover:bg-purple-50':'hover:bg-slate-50'}`}>
                                                        <td className={`p-3 font-bold border-r table-pin-col z-10 ${r.yr===2027?'bg-purple-50/70':'bg-white'}`}>
                                                            {r.label}<span className={`ml-2 text-[9px] font-black px-1.5 py-0.5 rounded-full ${r.yr===2027?'bg-purple-100 text-purple-700':'bg-slate-100 text-slate-500'}`}>{r.yr===2027?'FCST 27':'FCST 26'}</span>
                                                        </td>
                                                        <td className="p-3 text-right font-bold text-blue-800 bg-blue-50/40 border-l-2 border-blue-100">{formatNum(Math.round(r.ng))}</td>
                                                        <td className="p-3 text-right font-bold text-emerald-700 bg-emerald-50/40">{formatNum(Math.round(r.billed))}</td>
                                                        <td className="p-3 text-right text-amber-600 bg-amber-50/40">{formatNum(Math.round(r.ng-r.billed))}</td>
                                                        <td className="p-3 text-right text-amber-600 bg-amber-50/40">{r18SysLoss.toFixed(1)}%</td>
                                                        <td className="p-3 text-right text-slate-400 border-l border-slate-100">{r.budBilledMwh>0?formatNum(Math.round(r.budBilledMwh)):'—'}</td>
                                                        <td className={`p-3 text-right font-bold ${r.varBud===null?'text-slate-300':r.varBud>=0?'text-emerald-600':'text-red-500'}`}>{r.varBud===null?'—':`${r.varBud>0?'+':''}${formatNum(Math.round(r.varBud))}`}</td>
                                                        <td className="p-3 text-right font-bold text-blue-700 bg-blue-50/40 border-l-2 border-blue-100">{formatUSDb(r.revUSD)}</td>
                                                        <td className={`p-3 text-right font-bold ${r.yoyPct>=0?'text-emerald-600':'text-red-500'}`}>{r.yoyPct>0?'+':''}{r.yoyPct.toFixed(1)}%</td>
                                                    </tr>
                                                </React.Fragment>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot className="bg-slate-200 font-black border-t-2 sticky bottom-0 z-10">
                                        <tr className="border-b border-slate-300">
                                            <td className="p-3 border-r table-pin-col bg-slate-200 z-20 text-emerald-900">Apr–Dec 2026 (9M)</td>
                                            <td className="p-3 text-right bg-blue-100/60 border-l-2 border-blue-300">{formatNum(Math.round(sumNG(fcst2026)))}</td>
                                            <td className="p-3 text-right bg-emerald-100/60">{formatNum(Math.round(sumBil(fcst2026)))}</td>
                                            <td className="p-3 text-right bg-amber-100/60">{formatNum(Math.round(sumNG(fcst2026)-sumBil(fcst2026)))}</td>
                                            <td className="p-3 bg-amber-100/60">{r18SysLoss.toFixed(1)}%</td>
                                            <td className="p-3 text-right">{formatNum(Math.round(fcst2026.reduce((s,r)=>s+r.budBilledMwh,0)))}</td>
                                            <td className={`p-3 text-right ${(sumBil(fcst2026)-fcst2026.reduce((s,r)=>s+r.budBilledMwh,0))>=0?'text-emerald-700':'text-red-600'}`}>{(()=>{const v=sumBil(fcst2026)-fcst2026.reduce((s,r)=>s+r.budBilledMwh,0);return `${v>0?'+':''}${formatNum(Math.round(v))}`})()}</td>
                                            <td className="p-3 text-right bg-blue-100/60 border-l-2 border-blue-300">{formatUSDb(sumRev(fcst2026))}</td>
                                            <td className="p-3"></td>
                                        </tr>
                                        <tr className="border-b border-slate-300">
                                            <td className="p-3 border-r table-pin-col bg-slate-200 z-20 text-purple-900">Jan–Sep 2027 (9M)</td>
                                            <td className="p-3 text-right bg-purple-100/60 border-l-2 border-purple-300">{formatNum(Math.round(sumNG(fcst2027)))}</td>
                                            <td className="p-3 text-right bg-purple-100/60">{formatNum(Math.round(sumBil(fcst2027)))}</td>
                                            <td className="p-3 text-right bg-amber-100/60">{formatNum(Math.round(sumNG(fcst2027)-sumBil(fcst2027)))}</td>
                                            <td className="p-3 bg-amber-100/60">{r18SysLoss.toFixed(1)}%</td>
                                            <td className="p-3 text-right text-slate-400">—</td><td className="p-3 text-right text-slate-400">—</td>
                                            <td className="p-3 text-right bg-purple-100/60 border-l-2 border-purple-300">{formatUSDb(sumRev(fcst2027))}</td>
                                            <td className="p-3"></td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 border-r table-pin-col bg-slate-300 z-20">18-Month Forecast Total</td>
                                            <td className="p-3 text-right bg-slate-300 border-l-2 border-slate-400">{formatNum(Math.round(sumNG(fcstRows)))}</td>
                                            <td className="p-3 text-right bg-slate-300">{formatNum(Math.round(sumBil(fcstRows)))}</td>
                                            <td className="p-3 bg-slate-300" colSpan="5"></td>
                                            <td className="p-3 text-right bg-slate-300 border-l-2 border-slate-400">{formatUSDb(sumRev(fcstRows))}</td>
                                            <td className="p-3 bg-slate-300"></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                );
            };

            const renderGlossaryTab = () => (
                <div className="p-10 h-full overflow-y-auto custom-scroll">
                    <div className="max-w-5xl mx-auto bg-white p-8 rounded-xl border shadow-sm space-y-10">
                        <div>
                            <h2 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-2 border-b pb-4"><Icons.BookOpen /> Forecasting Scenarios Glossary</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-purple-50/50 border border-purple-200 p-6 rounded-xl space-y-3">
                                    <h3 className="text-lg font-bold text-purple-800 flex items-center gap-2"><Icons.Users /> LE: Customer Volumetric Trend</h3>
                                    <p className="text-sm text-slate-700"><strong>Definition:</strong> Calculates the absolute average monthly kWh variance for <em>each individual customer</em> (Q1 2026 vs Q1 2025). This volumetric difference is then added to or subtracted from that customer's remaining budgeted months.</p>
                                </div>
                                <div className="bg-blue-50/50 border border-blue-200 p-6 rounded-xl space-y-3">
                                    <h3 className="text-lg font-bold text-blue-800 flex items-center gap-2"><Icons.Zap /> LE: Rate Class Volumetric Trend</h3>
                                    <p className="text-sm text-slate-700"><strong>Definition:</strong> Calculates the absolute average monthly kWh variance for the <em>entire Rate Class</em> (Q1 2026 vs Q1 2025). This aggregate class variance is then spread proportionally across all customers based on their budget share.</p>
                                </div>
                                <div className="bg-orange-50/50 border border-orange-200 p-6 rounded-xl space-y-3">
                                    <h3 className="text-lg font-bold text-orange-800 flex items-center gap-2"><Icons.Briefcase /> LE: Base Trend (Hybrid)</h3>
                                    <p className="text-sm text-slate-700"><strong>Definition:</strong> A blended approach. Uses <em>Customer Volumetric Trend</em> for RT10, RT20, RT60 and <em>Rate Class Volumetric Trend</em> for all other classes.</p>
                                </div>
                                <div className="bg-indigo-50/50 border border-indigo-200 p-6 rounded-xl space-y-3">
                                    <h3 className="text-lg font-bold text-indigo-800 flex items-center gap-2"><Icons.Sliders /> LE: Advanced Scenario Builder</h3>
                                    <p className="text-sm text-slate-700"><strong>Definition:</strong> Allows manual definition of percentage multipliers (Industry, Month, RC) or specific volumetric allocations (Customers) applied to the remaining Base Budget.</p>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-6 rounded-xl space-y-3 md:col-span-2">
                                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Icons.Grid /> Pivot & Movers: Top/Bottom Performers</h3>
                                    <p className="text-sm text-slate-700"><strong>Formula:</strong> <code>Variance (GWh) = 2026 Target Scenario - 2025 Base Actuals</code></p>
                                    <p className="text-sm text-slate-700"><strong>Timeframe:</strong> 'FY' compares full 12 months. 'YTD' compares Jan to global month filter. 'MTD' compares only the specific global month.</p>
                                    <p className="text-sm text-slate-700"><strong>Note:</strong> Aggregated classes (RT10, RT20, EV, BU) excluded from Movers list to focus on individually managed accounts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

            return (
                <div className="flex flex-col h-full w-full bg-slate-100">

                    {/* NAME PROMPT MODAL */}
                    {showNamePrompt && (
                        <div className="fixed inset-0 bg-slate-900/70 flex items-center justify-center z-[100] backdrop-blur-sm">
                            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 flex flex-col items-center gap-5">
                                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">👤</div>
                                <div className="text-center">
                                    <h2 className="text-xl font-black text-slate-800">Welcome to JPS Analytics</h2>
                                    <p className="text-sm text-slate-500 mt-1">Enter your name so teammates can see you're online.</p>
                                </div>
                                <input
                                    autoFocus
                                    type="text"
                                    value={nameInput}
                                    onChange={e => setNameInput(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && handleNameSubmit()}
                                    placeholder="e.g. Jordache Campbell"
                                    className="w-full border-2 border-slate-200 rounded-xl px-4 py-3 text-sm font-medium outline-none focus:border-blue-400 text-center"
                                />
                                <button
                                    onClick={handleNameSubmit}
                                    disabled={!nameInput.trim()}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white py-3 rounded-xl font-bold text-sm transition shadow"
                                >
                                    Enter Dashboard
                                </button>
                            </div>
                        </div>
                    )}

                    {/* REALTIME TOAST */}
                    {realtimeToast && (
                        <div className={`fixed bottom-6 right-6 z-[90] px-4 py-3 rounded-xl shadow-xl text-sm font-bold flex items-center gap-2 transition-all animate-pulse
                            ${realtimeToast.type === 'join' ? 'bg-emerald-600 text-white' :
                              realtimeToast.type === 'leave' ? 'bg-slate-600 text-white' :
                              'bg-blue-600 text-white'}`}>
                            {realtimeToast.type === 'join' ? '🟢' : realtimeToast.type === 'leave' ? '⚫' : '🔄'}
                            {realtimeToast.msg}
                        </div>
                    )}

                    <header className="bg-white border-b px-6 py-4 flex justify-between items-center shrink-0 z-20">
                        <div>
                            <h1 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Icons.PieChart /> JPS Sales Analytics Model</h1>
                            <p className="text-xs text-slate-500">Commercial Analytics | Redistribution & Forecasting Engine</p>
                        </div>
                        <div className="flex items-center gap-4">

                            {/* ONLINE PRESENCE AVATARS */}
                            {Object.keys(onlineUsers).length > 0 && (
                                <div className="flex items-center gap-2 border-r pr-4 border-slate-200">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Online</span>
                                    <div className="flex -space-x-2">
                                        {Object.entries(onlineUsers).map(([uid, user]) => (
                                            <div key={uid} title={user.name}
                                                className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[11px] font-black text-white shadow-sm cursor-default select-none"
                                                style={{ backgroundColor: user.color }}>
                                                {getInitials(user.name)}
                                            </div>
                                        ))}
                                    </div>
                                    <span className="text-xs text-emerald-600 font-bold flex items-center gap-1">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block"></span>
                                        {Object.keys(onlineUsers).length} live
                                    </span>
                                </div>
                            )}

                            {/* CURRENT USER CHIP */}
                            {currentUser && (
                                <div className="flex items-center gap-2 border-r pr-4 border-slate-200">
                                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black text-white shadow-sm"
                                        style={{ backgroundColor: getColor(userIdRef) }}>
                                        {getInitials(currentUser)}
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold text-slate-700 leading-none">{currentUser}</div>
                                        <button onClick={() => { setNameInput(currentUser); setShowNamePrompt(true); }} className="text-[10px] text-slate-400 hover:text-blue-500 transition leading-none">change</button>
                                    </div>
                                </div>
                            )}

                            {rawActuals.length > 0 && (
                                <div className={`text-xs px-3 py-1.5 rounded-full border shadow-sm flex items-center gap-2 ${isBudgetCommitted ? 'bg-emerald-50 text-emerald-700 border-emerald-200':'bg-orange-50 text-orange-700 border-orange-200'}`}>
                                    <span className={`w-2 h-2 rounded-full ${isBudgetCommitted ? 'bg-emerald-500' : 'bg-orange-400 animate-pulse'}`}></span>
                                    {isBudgetCommitted ? 'Granular Budget Active' : 'Allocating Budget...'}
                                </div>
                            )}
                            <div className={`text-xs px-3 py-1.5 rounded-full border shadow-sm flex items-center gap-2 ${supabaseStatus === 'connected' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : supabaseStatus === 'error' ? 'bg-red-50 text-red-700 border-red-200' : supabaseStatus === 'connecting' ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
                                <span className={`w-2 h-2 rounded-full ${supabaseStatus === 'connected' ? 'bg-emerald-500' : supabaseStatus === 'error' ? 'bg-red-500' : supabaseStatus === 'connecting' ? 'bg-amber-500 animate-pulse' : 'bg-slate-400'}`}></span>
                                {supabaseStatus === 'connected' ? 'Cloud Sync Active' : supabaseStatus === 'error' ? 'Cloud Sync Error' : supabaseStatus === 'connecting' ? 'Connecting...' : 'Local Mode'}
                            </div>

                            {(rawActuals.length > 0 || rawBudget.length > 0) && (
                                <div className="flex items-center gap-2 border-l pl-4 border-slate-200">
                                    {rawActuals.length > 0 && rawBudget.length > 0 && (
                                        <>
                                            <button onClick={handleSaveVersion} className="flex items-center gap-1.5 text-sm bg-white hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg border shadow-sm transition font-medium"><Icons.Save /> Save Scenario</button>
                                            <button onClick={() => setIsVersionModalOpen(true)} className="flex items-center gap-1.5 text-sm bg-white hover:bg-slate-50 text-slate-700 px-3 py-1.5 rounded-lg border shadow-sm transition font-medium"><Icons.History /> Versions <span className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded text-xs ml-1">{savedVersions.length}</span></button>
                                        </>
                                    )}
                                    <button onClick={handleClearData} className="flex items-center gap-1.5 text-sm bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-lg border border-red-200 shadow-sm transition font-medium" title="Clear all data and restart">
                                        <Icons.RefreshCw /> Reset
                                    </button>
                                </div>
                            )}
                        </div>
                    </header>

                    <div className="flex flex-1 overflow-hidden">
                        <aside className="w-56 bg-white border-r flex flex-col gap-1 p-4 shrink-0 overflow-y-auto custom-scroll z-10 shadow-sm">
                            {rawActuals.length > 0 && (
                                <>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1 mt-2">Executive</div>
                                    <button onClick={()=>setActiveTab('overview')} className={`dashboard-tab ${activeTab==='overview'?'active':''}`}><Icons.Building /> Overview</button>
                                    <button onClick={()=>setActiveTab('monthly')} className={`dashboard-tab ${activeTab==='monthly'?'active':''}`}><Icons.Calendar /> Monthly Trend</button>
                                    <button onClick={()=>setActiveTab('pivot')} className={`dashboard-tab ${activeTab==='pivot'?'active':''}`}><Icons.Grid /> Pivot & Movers</button>
                                    <button onClick={()=>setActiveTab('netgen')} className={`dashboard-tab ${activeTab==='netgen'?'active':''}`}><Icons.Wind /> Net Gen Forecast</button>
                                    <button onClick={()=>setActiveTab('rolling18')} className={`dashboard-tab ${activeTab==='rolling18'?'active':''}`}><Icons.Calendar /> Rolling 18M Forecast</button>
                                    
                                    <div className="h-px bg-slate-200 my-3 mx-2"></div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1">Forecast Scenarios</div>
                                    
                                    <button onClick={()=>setActiveTab('leCust')} className={`dashboard-tab ${activeTab==='leCust'?'active':''}`}><Icons.Users /> LE: Cust Vol</button>
                                    <button onClick={()=>setActiveTab('leRC')} className={`dashboard-tab ${activeTab==='leRC'?'active':''}`}><Icons.Zap /> LE: RC Vol</button>
                                    <button onClick={()=>setActiveTab('leBase')} className={`dashboard-tab ${activeTab==='leBase'?'active':''}`}><Icons.Briefcase /> LE: Base</button>
                                    <button onClick={()=>setActiveTab('leCustom')} className={`dashboard-tab ${activeTab==='leCustom'?'active':''}`}><Icons.Sliders /> LE: Advanced</button>
                                    
                                    <div className="h-px bg-slate-200 my-3 mx-2"></div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1">Analysis Engine</div>
                                    
                                    <button onClick={()=>setActiveTab('comparison')} className={`dashboard-tab ${activeTab==='comparison'?'active':''}`}><Icons.Grid /> Scenario Compare</button>
                                    <button onClick={()=>setActiveTab('allocation')} className={`dashboard-tab ${activeTab==='allocation'?'active':''}`}><Icons.Calculator /> Allocations</button>
                                    <button onClick={()=>setActiveTab('variance')} className={`dashboard-tab ${activeTab==='variance'?'active':''}`}><Icons.TrendingUp /> Variance Matrix</button>
                                    <button onClick={()=>setActiveTab('customers')} className={`dashboard-tab ${activeTab==='customers'?'active':''}`}><Icons.Users /> Customer Data</button>
                                </>
                            )}
                            
                            <div className="mt-auto"></div>
                            <button onClick={()=>setActiveTab('glossary')} className={`dashboard-tab ${activeTab==='glossary'?'active':''}`}><Icons.BookOpen /> Glossary</button>
                            <div className="h-px bg-slate-200 my-3 mx-2"></div>
                            <button onClick={()=>setActiveTab('data')} className={`dashboard-tab ${activeTab==='data'?'active':''}`}><Icons.Database /> Data Hub</button>
                        </aside>

                        <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                             {rawActuals.length > 0 && ['overview', 'monthly', 'leCust', 'leRC', 'leBase', 'leCustom', 'variance', 'pivot', 'netgen'].includes(activeTab) && (
                                <div className="bg-white border-b px-6 py-2 flex gap-4 items-center text-[10px] font-bold uppercase tracking-wider text-slate-500 shadow-sm shrink-0 overflow-x-auto z-10 relative">
                                    <Icons.Filter />
                                    <div className="flex items-center gap-1 border-r pr-3">
                                        <Icons.Calendar />
                                        <select value={ytdMonth} onChange={e=>setYtdMonth(e.target.value)} className="bg-transparent text-blue-700 outline-none">
                                            <option value="All">Full Year (YTD)</option>
                                            {monthNames.map(m=><option key={m} value={m}>YTD: {m}</option>)}
                                        </select>
                                    </div>
                                    <select value={fCust} onChange={e=>setFCust(e.target.value)} className="bg-transparent outline-none max-w-[150px] truncate pr-2">
                                        <option value="All">All Customers</option>{dimensions.customers.map(c=><option key={c} value={c}>{c}</option>)}
                                    </select>
                                    <select value={fRC} onChange={e=>setFRC(e.target.value)} className="bg-transparent outline-none">
                                        <option value="All">All Rates</option>{dimensions.rcs.map(r=><option key={r}>{r}</option>)}
                                    </select>
                                    <select value={fParish} onChange={e=>setFParish(e.target.value)} className="bg-transparent outline-none">
                                        <option value="All">All Parishes</option>{dimensions.parishes.map(p=><option key={p}>{p}</option>)}
                                    </select>
                                    <select value={fInd} onChange={e=>setFInd(e.target.value)} className="bg-transparent outline-none">
                                        <option value="All">All Industries</option>{dimensions.inds.map(i=><option key={i}>{i}</option>)}
                                    </select>
                                </div>
                             )}

                            <div className="flex-1 overflow-hidden relative bg-slate-50/50 z-0">
                                <ErrorBoundary>
                                    {rawActuals.length === 0 && activeTab !== 'data' && activeTab !== 'glossary' ? (
                                        <div className="flex flex-col items-center justify-center h-full text-slate-500">
                                            <Icons.CloudDown />
                                            <h2 className="text-xl font-bold mb-2 mt-4">Fetching Cloud Data...</h2>
                                            <p className="text-sm mb-6 max-w-md text-center">Auto-loading from your repository. If this persists, configure data sources manually.</p>
                                            <button onClick={() => setActiveTab('data')} className="bg-slate-800 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-slate-900 transition">Go to Data Hub</button>
                                        </div>
                                    ) : (
                                        <>
                                            {activeTab === 'data' && renderDataTab()}
                                            {activeTab === 'overview' && renderOverviewTab()}
                                            {activeTab === 'monthly' && renderMonthlyTab()}
                                            {activeTab === 'allocation' && renderAllocationTab()}
                                            {activeTab === 'leCust' && renderLeCustTab()}
                                            {activeTab === 'leRC' && renderLeRCTab()}
                                            {activeTab === 'leBase' && renderLeBaseTab()}
                                            {activeTab === 'leCustom' && renderLeCustomTab()}
                                            {activeTab === 'pivot' && renderPivotTab()}
                                            {activeTab === 'variance' && renderVarianceTab()}
                                            {activeTab === 'glossary' && renderGlossaryTab()}
                                            {activeTab === 'comparison' && renderComparisonTab()}
                                            {activeTab === 'netgen' && renderNetGenTab()}
                                            {activeTab === 'rolling18' && renderRolling18Tab()}
                                            {activeTab === 'customers' && renderCustomerTab()}
                                        </>
                                    )}
                                </ErrorBoundary>
                            </div>
                        </main>
                    </div>

                    {/* Version Manager Modal - FIXED: pullScenariosFromCloud now defined */}
                    {isVersionModalOpen && (
                        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 backdrop-blur-sm">
                            <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl flex flex-col overflow-hidden max-h-[80vh]">
                                <div className="px-6 py-4 border-b flex justify-between items-center bg-slate-50">
                                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2"><Icons.History /> Saved Scenarios & Versions</h2>
                                    <button onClick={() => setIsVersionModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition"><Icons.X /></button>
                                </div>
                                
                                <div className="bg-slate-800 p-4 flex justify-between items-center text-white shrink-0 shadow-inner">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Icons.CloudUp />
                                        <span className="font-bold">Cloud Sync</span>
                                        <span className="text-slate-400 text-xs ml-2">Pulling overwrites unsaved local versions.</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button onClick={pullScenariosFromCloud} disabled={isSyncingConfigs} className="bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded text-sm font-bold shadow-sm transition disabled:opacity-50 flex items-center gap-2">
                                            <Icons.CloudDown /> {isSyncingConfigs ? 'Pulling...' : 'Pull Config from Cloud'}
                                        </button>
                                    </div>
                                </div>

                                <div className="p-6 overflow-y-auto flex-1 bg-slate-50/50">
                                    {savedVersions.length === 0 ? (
                                        <div className="text-center py-10 text-slate-500">
                                            <div className="flex justify-center mb-3 text-slate-300"><Icons.Save /></div>
                                            <p className="font-medium">No versions saved locally.</p>
                                            <p className="text-sm mt-1 mb-4">Save a version from the header, or pull from the cloud.</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-3">
                                            {savedVersions.map(v => (
                                                <div key={v.id} className={`bg-white border rounded-xl p-4 flex items-center justify-between shadow-sm transition ${v.isDefault ? 'border-amber-400 bg-amber-50/20' : 'hover:border-blue-300'}`}>
                                                    <div>
                                                        <h4 className="font-bold text-slate-800 text-lg flex items-center gap-2">
                                                            {v.isDefault && <span className="text-amber-500 flex items-center gap-1 text-xs px-2 py-0.5 bg-amber-100 rounded-full border border-amber-200"><Icons.Star filled /> Default</span>}
                                                            {v.name}
                                                        </h4>
                                                        <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                                                            <span><Icons.Calendar className="inline w-3 h-3 mr-1"/> {v.timestamp}</span>
                                                            <span className="text-slate-300">|</span>
                                                            {v.savedBy && <span className="text-blue-500 font-bold">by {v.savedBy}</span>}
                                                            {v.savedBy && <span className="text-slate-300">|</span>}
                                                            <span>Overrides: {Object.keys(v.allocOverrides || {}).length + Object.keys(v.advOverrides?.pct || {}).length + Object.keys(v.advOverrides?.vol || {}).length}</span>
                                                            <span className="text-slate-300">|</span>
                                                            <span className={v.isNormalizeHurricane ? 'text-emerald-600' : 'text-slate-400'}>Hurricane Norm: {v.isNormalizeHurricane ? 'ON' : 'OFF'}</span>
                                                        </p>
                                                    </div>
                                                    <div className="flex gap-2">
                                                        {!v.isDefault && (
                                                            <button onClick={() => handleSetDefaultVersion(v.id)} className="bg-white border hover:bg-amber-50 hover:text-amber-600 text-slate-500 px-3 py-2 rounded-lg text-sm font-bold shadow-sm transition flex items-center gap-1" title="Set as default scenario">
                                                                <Icons.Star /> Make Default
                                                            </button>
                                                        )}
                                                        <button onClick={() => handleRestoreVersion(v)} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm transition">
                                                            Restore
                                                        </button>
                                                        <button onClick={() => handleDeleteVersion(v.id)} className="bg-white border hover:bg-red-50 text-red-500 p-2 rounded-lg shadow-sm transition" title="Delete">
                                                            <Icons.Trash />
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<App />);