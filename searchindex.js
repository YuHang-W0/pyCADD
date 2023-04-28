Search.setIndex({docnames:["README","index","source/dance","source/dock","source/dynamic","source/gauss","source/input_file_fmt","source/modules","source/pyCADD","source/pyCADD.Dance","source/pyCADD.Dance.algorithm","source/pyCADD.Demand","source/pyCADD.Density","source/pyCADD.Dock","source/pyCADD.Dynamic","source/pyCADD.VSW","source/pyCADD.utils"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["README.md","index.rst","source/dance.md","source/dock.md","source/dynamic.md","source/gauss.md","source/input_file_fmt.md","source/modules.rst","source/pyCADD.rst","source/pyCADD.Dance.rst","source/pyCADD.Dance.algorithm.rst","source/pyCADD.Demand.rst","source/pyCADD.Density.rst","source/pyCADD.Dock.rst","source/pyCADD.Dynamic.rst","source/pyCADD.VSW.rst","source/pyCADD.utils.rst"],objects:{"":[[8,0,0,"-","pyCADD"]],"pyCADD.Dance":[[10,0,0,"-","algorithm"],[9,0,0,"-","common"],[9,0,0,"-","core"],[9,0,0,"-","metrics"]],"pyCADD.Dance.algorithm":[[10,0,0,"-","DL"],[10,0,0,"-","consensus"],[10,0,0,"-","default_params"]],"pyCADD.Dance.algorithm.DL":[[10,1,1,"","MLP"]],"pyCADD.Dance.algorithm.DL.MLP":[[10,2,1,"","forward"],[10,2,1,"","get_params"],[10,2,1,"","initialize"],[10,2,1,"","predict"],[10,2,1,"","predict_proba"],[10,3,1,"","training"]],"pyCADD.Dance.algorithm.consensus":[[10,1,1,"","Average"],[10,1,1,"","GeoMean"],[10,1,1,"","Geo_Average"],[10,1,1,"","Maximum"],[10,1,1,"","Mean"],[10,1,1,"","Minimum"],[10,4,1,"","average"],[10,4,1,"","maximum"],[10,4,1,"","minimum"],[10,4,1,"","std"]],"pyCADD.Dance.algorithm.consensus.Average":[[10,2,1,"","fit"]],"pyCADD.Dance.algorithm.consensus.Geo_Average":[[10,2,1,"","fit"]],"pyCADD.Dance.algorithm.consensus.Maximum":[[10,2,1,"","fit"]],"pyCADD.Dance.algorithm.consensus.Minimum":[[10,2,1,"","fit"]],"pyCADD.Dance.common":[[9,1,1,"","Dancer"],[9,1,1,"","Evaluator"],[9,1,1,"","Matrix"]],"pyCADD.Dance.common.Dancer":[[9,2,1,"","add_dataset"],[9,2,1,"","add_neg_dataset"],[9,2,1,"","add_pos_dataset"],[9,2,1,"","get_merged_data"],[9,2,1,"","prepare_data"],[9,2,1,"","save"],[9,2,1,"","save_csv"],[9,2,1,"","save_pickle"]],"pyCADD.Dance.common.Evaluator":[[9,2,1,"","add_clf"],[9,2,1,"","del_clf"],[9,5,1,"","gbt_default_params"],[9,2,1,"","get_clf"],[9,2,1,"","get_clfs_dict"],[9,2,1,"","get_gbt_default_params"],[9,2,1,"","get_lr_default_params"],[9,2,1,"","get_rf_default_params"],[9,2,1,"","get_weights"],[9,2,1,"","load_params"],[9,5,1,"","lr_default_params"],[9,2,1,"","print_classifier_info"],[9,2,1,"","print_cv_results"],[9,2,1,"","repeat_cv"],[9,5,1,"","rf_default_params"],[9,2,1,"","save_params"],[9,2,1,"","search_params"],[9,2,1,"","testset_eval"]],"pyCADD.Dance.common.Matrix":[[9,2,1,"","from_csv"],[9,2,1,"","from_pickle"],[9,2,1,"","from_splited_data"],[9,2,1,"","get_test_data"],[9,2,1,"","get_train_data"],[9,2,1,"","split_train_test_data"]],"pyCADD.Dance.core":[[9,4,1,"","calc_scp_score"],[9,4,1,"","hyperparam_tuning"]],"pyCADD.Dance.metrics":[[9,4,1,"","nef_score"]],"pyCADD.Demand":[[11,0,0,"-","cli"],[11,0,0,"-","config"],[11,0,0,"-","core"]],"pyCADD.Demand.config":[[11,1,1,"","BaseQueryCfg"]],"pyCADD.Demand.config.BaseQueryCfg":[[11,2,1,"","get_query"]],"pyCADD.Demand.core":[[11,1,1,"","QueryClient"],[11,4,1,"","parse_uniport"],[11,4,1,"","query_pdb"],[11,4,1,"","query_uniprot"]],"pyCADD.Demand.core.QueryClient":[[11,2,1,"","clean_pdb_data"],[11,2,1,"","get_apo"],[11,2,1,"","get_mutation_pdb"],[11,2,1,"","get_mutations"],[11,2,1,"","save"]],"pyCADD.Density":[[12,0,0,"-","base"],[12,0,0,"-","core"],[12,0,0,"-","ui"]],"pyCADD.Density.base":[[12,1,1,"","Gauss"]],"pyCADD.Density.base.Gauss":[[12,2,1,"","create_inputfile"],[12,2,1,"","extract_cube"],[12,5,1,"","gauss"],[12,2,1,"","get_mo_info"],[12,2,1,"","read_origin_st"],[12,2,1,"","run"],[12,2,1,"","set_DFT"],[12,2,1,"","set_basis_set"],[12,2,1,"","set_charge"],[12,2,1,"","set_multiplicity"],[12,2,1,"","set_solvent"],[12,2,1,"","set_system"],[12,5,1,"","system_info"]],"pyCADD.Density.core":[[12,1,1,"","Daemon"],[12,4,1,"","cube_file_generate"],[12,4,1,"","generate_energy"],[12,4,1,"","generate_fchk"],[12,4,1,"","generate_opt"],[12,4,1,"","get_gaussian"],[12,4,1,"","get_mo"],[12,4,1,"","system_default"]],"pyCADD.Density.core.Daemon":[[12,2,1,"","daemonize"],[12,2,1,"","restart"],[12,2,1,"","run"],[12,2,1,"","start"],[12,2,1,"","stop"]],"pyCADD.Density.ui":[[12,1,1,"","UI_Gauss"]],"pyCADD.Density.ui.UI_Gauss":[[12,5,1,"","cpu_count"],[12,5,1,"","mem"],[12,2,1,"","run"],[12,2,1,"","set_system"]],"pyCADD.Dock":[[13,0,0,"-","cli"],[13,0,0,"-","common"],[13,0,0,"-","config"],[13,0,0,"-","console"],[13,0,0,"-","core"],[13,0,0,"-","data"],[13,0,0,"-","ensemble"],[13,0,0,"-","ui"]],"pyCADD.Dock.common":[[13,1,1,"","ComplexFile"],[13,1,1,"","DockResultFile"],[13,1,1,"","GridFile"],[13,1,1,"","LigandFile"],[13,1,1,"","MaestroFile"],[13,1,1,"","MultiInputFile"],[13,1,1,"","PDBFile"],[13,1,1,"","ReceptorFile"],[13,4,1,"","check_pdb"],[13,4,1,"","get_input_pdbid"],[13,4,1,"","get_predict_structure"],[13,4,1,"","launch"]],"pyCADD.Dock.common.ComplexFile":[[13,2,1,"","get_lig_molnum"],[13,2,1,"","split"]],"pyCADD.Dock.common.DockResultFile":[[13,2,1,"","calc_mmgbsa"],[13,5,1,"","docking_ligand_st"],[13,5,1,"","docking_receptor_st"],[13,2,1,"","extract_docking_data"],[13,2,1,"","get_ligand_file"],[13,2,1,"","get_merged_file"],[13,2,1,"","get_receptor_file"],[13,5,1,"","merged_file"],[13,5,1,"","property"]],"pyCADD.Dock.common.LigandFile":[[13,2,1,"","calc_admet"]],"pyCADD.Dock.common.MaestroFile":[[13,2,1,"","convert_format"],[13,2,1,"","get_first_structure"],[13,2,1,"","minimize"],[13,5,1,"","st_reader"],[13,5,1,"","structures"]],"pyCADD.Dock.common.MultiInputFile":[[13,2,1,"","get_gridfile_path_list"],[13,2,1,"","get_ligand_list"],[13,2,1,"","get_pairs_list"],[13,2,1,"","get_pdbfile_path_list"],[13,2,1,"","get_pdbid_list"],[13,2,1,"","parse_file"],[13,2,1,"","read"],[13,2,1,"","read_from_config"]],"pyCADD.Dock.common.PDBFile":[[13,2,1,"","get_lig"],[13,2,1,"","get_lig_name"],[13,2,1,"","keep_chain"]],"pyCADD.Dock.config":[[13,1,1,"","BaseConfig"],[13,1,1,"","DataConfig"],[13,1,1,"","DefaultDataConfig"]],"pyCADD.Dock.console":[[13,1,1,"","Docker"]],"pyCADD.Dock.console.Docker":[[13,2,1,"","calc_admet"],[13,2,1,"","calc_mmgbsa"],[13,2,1,"","calc_volume"],[13,2,1,"","dock"],[13,2,1,"","download_pdb"],[13,2,1,"","extra_admet_data"],[13,2,1,"","extra_docking_data"],[13,2,1,"","grid_generate"],[13,2,1,"","keep_chain"],[13,5,1,"","lig_info"],[13,5,1,"","lig_name"],[13,2,1,"","minimize"],[13,5,1,"","pdb_file"],[13,5,1,"","pdb_file_path"],[13,5,1,"","pdbid"],[13,2,1,"","save_admet_data"],[13,2,1,"","save_docking_data"],[13,2,1,"","set_calc_rmsd"],[13,2,1,"","set_precision"],[13,2,1,"","split_complex"]],"pyCADD.Dock.core":[[13,4,1,"","calc_admet"],[13,4,1,"","calc_mmgbsa"],[13,4,1,"","calc_volume"],[13,4,1,"","dock"],[13,4,1,"","grid_generate"],[13,4,1,"","minimize"]],"pyCADD.Dock.data":[[13,1,1,"","Reporter"],[13,4,1,"","extra_admet_data"],[13,4,1,"","extra_docking_data"],[13,4,1,"","save_admet_data"],[13,4,1,"","save_docking_data"],[13,4,1,"","save_ensemble_docking_data"],[13,4,1,"","save_redocking_data"]],"pyCADD.Dock.data.Reporter":[[13,2,1,"","generate_report"]],"pyCADD.Dock.ensemble":[[13,4,1,"","split_ligand"]],"pyCADD.Dock.ui":[[13,1,1,"","UI_dock"]],"pyCADD.Dock.ui.UI_dock":[[13,2,1,"","run"]],"pyCADD.VSW":[[15,0,0,"-","base"],[15,0,0,"-","core"],[15,0,0,"-","register"],[15,0,0,"-","ui"]],"pyCADD.VSW.base":[[15,1,1,"","VSW"]],"pyCADD.VSW.base.VSW":[[15,5,1,"","database_list"],[15,5,1,"","genelist"],[15,2,1,"","generate_input_file"],[15,2,1,"","get_gene"],[15,2,1,"","get_receptor_list"],[15,2,1,"","read_databse"],[15,2,1,"","read_gene"],[15,5,1,"","required_dir"],[15,2,1,"","run"],[15,2,1,"","select_database"],[15,5,1,"","vsw_dir"]],"pyCADD.VSW.core":[[15,4,1,"","gen_input_file"],[15,4,1,"","read_database_config"],[15,4,1,"","read_gene_config"]],"pyCADD.VSW.register":[[15,4,1,"","del_database"],[15,4,1,"","del_gene"],[15,4,1,"","reg_database"],[15,4,1,"","reg_gene"]],"pyCADD.VSW.ui":[[15,1,1,"","UI_VSW"]],"pyCADD.VSW.ui.UI_VSW":[[15,2,1,"","get_database"],[15,2,1,"","get_gene"],[15,2,1,"","run"]],"pyCADD.utils":[[16,0,0,"-","cheminformatics"],[16,0,0,"-","common"],[16,0,0,"-","log"],[16,0,0,"-","tool"],[16,0,0,"-","ui"]],"pyCADD.utils.common":[[16,1,1,"","BaseFile"]],"pyCADD.utils.common.BaseFile":[[16,3,1,"","file_dir"],[16,3,1,"","file_ext"],[16,3,1,"","file_name"],[16,3,1,"","file_path"],[16,3,1,"","file_prefix"],[16,3,1,"","file_suffix"]],"pyCADD.utils.log":[[16,1,1,"","ModifiedFileHandler"],[16,4,1,"","get_logfile_name"]],"pyCADD.utils.log.ModifiedFileHandler":[[16,2,1,"","emit"]],"pyCADD.utils.tool":[[16,1,1,"","Myconfig"],[16,4,1,"","check_file_update_progress"],[16,4,1,"","download_pdb"],[16,4,1,"","download_pdb_list"],[16,4,1,"","get_config"],[16,4,1,"","get_lib_dir"],[16,4,1,"","makedirs_from_list"],[16,4,1,"","timeit"]],"pyCADD.utils.tool.Myconfig":[[16,2,1,"","optionxform"]],"pyCADD.utils.ui":[[16,1,1,"","UI"]],"pyCADD.utils.ui.UI":[[16,5,1,"","basic_info"],[16,2,1,"","clear_info"],[16,2,1,"","create_panel"],[16,2,1,"","get_confirm"],[16,2,1,"","get_input"],[16,5,1,"","info_index"],[16,5,1,"","system_info"],[16,5,1,"","title"],[16,5,1,"","version_info"]],pyCADD:[[9,0,0,"-","Dance"],[11,0,0,"-","Demand"],[12,0,0,"-","Density"],[13,0,0,"-","Dock"],[15,0,0,"-","VSW"],[16,0,0,"-","utils"]]},objnames:{"0":["py","module","Python \u6a21\u5757"],"1":["py","class","Python \u7c7b"],"2":["py","method","Python \u65b9\u6cd5"],"3":["py","attribute","Python \u5c5e\u6027"],"4":["py","function","Python \u51fd\u6570"],"5":["py","property","Python property"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:property"},terms:{"002":4,"002p":4,"01":[],"03":0,"04":0,"05":[],"056":6,"06":[],"07":0,"10":0,"100":0,"100000":4,"100n":4,"12":4,"135":[],"14":0,"15":0,"16":[0,4],"18":0,"1dkf":13,"1fby":4,"1xj7":6,"1xq3":6,"20":13,"2020":0,"2022":0,"2023":0,"21":0,"25":[2,9],"27":0,"28":0,"2am9":6,"2ylp":6,"30":[2,9],"30x4":2,"31g":12,"3a9e":13,"3d":3,"3kmr":13,"3kmz":13,"3oap":3,"42":[2,9],"48":4,"4dqm":13,"4k6i":3,"50000000":4,"5ji0":3,"5k13":13,"6q7":13,"75":3,"9cr":[3,4],"9ra":3,"case":16,"class":[9,10,11,12,13,15,16],"default":16,"float":[9,11],"for":[9,15,16],"function":[1,9],"import":[2,4],"in":[4,6,16],"int":[9,10,12,13,16],"null":12,"return":[12,16],"static":[9,13],"true":[2,9,10,11,12,13,16],"while":16,"with":4,__class__:9,__name__:9,_comsolv:4,_consensu:10,_consol:15,_dock_final_result:3,_dry:4,_evalu:[],_fill_nan:9,_format:11,_io:13,_leap:4,_noh:4,_out:4,_structur:13,_tleap:4,a01:0,absolut:16,absorb:12,activ:[2,9],activity_data:[],add:[2,4],add_clf:[2,9],add_consensus_scor:[],add_dataset:[2,9],add_neg_dataset:[2,9],add_pos_dataset:[2,9],additional_info:16,admet:13,admet_fil:13,aid:9,algorithm:[2,8,9],also:16,amber:0,ambertool:4,analysi:[0,7,8,16],analyz:[0,9],and:16,angl:[],ani:9,antechamb:4,api:[0,3,13],apo:[0,11],are:16,arg:[9,13],arrai:[9,10],atom:4,atom_num:13,auc:9,ave:10,averag:10,avgout:[],axi:10,b3lyp:[4,12],backupcount:16,base:[7,8],baseconfig:13,basefil:[13,16],basequerycfg:11,basic_info:16,basis_set:12,befor:16,best:[],best_gbt_param:2,best_lr_param:2,best_rf_param:2,best_scp:2,best_scp_scor:[],bms:13,bool:[9,10,11,12,13,16],box:13,brl:3,bug:0,build:0,byre:[],ca:[],cadd:9,calc_admet:13,calc_hbond:[],calc_mmgbsa:13,calc_rmsd:13,calc_rmsf:[],calc_scp_scor:9,calc_volum:13,calcul:12,call:16,callabl:9,cd:4,chain:13,chain_nam:13,charg:[4,12],check_file_update_progress:16,check_params_fil:[],check_pdb:13,cheminformat:[7,8],chk_file:12,chmod:16,choic:16,classmethod:[9,12],clean_pdb_data:11,clear_info:16,clf:9,clf_cv_result:[2,9],clf_name:9,cli:[0,1,3,7,8],click:0,cmd:[12,13],column:10,com:4,com_topfile_path:[],combin:[],common:[7,8],complex_dir:13,complex_fil:13,complexfil:13,comput:9,comsolvated_topfile_path:[],concurr:0,concurrent_log_handl:16,concurrentloghandl:[],concurrentrotatingfilehandl:16,config:[7,8],config_fil:[13,16],configpars:16,conform:[],consensu:[8,9],consol:[7,8],content:7,convert_format:13,copyight:0,core:[7,8,10],correct:12,correl:[],cover_to_pdb:[],cp:4,cpu:[0,12],cpu_count:12,cpu_num:[],crd:4,creat:4,creat_energy_inputfil:[],creat_input_fil:[],create_input_fil:4,create_inputfil:12,create_panel:16,cross_valid:[],csv:[2,3,6,9,13],csv_path:9,cube:12,cube_file_gener:12,cuda:0,cuda_devic:4,current:3,cutoff:11,cv:9,cv_model_evalu:[],cv_result:2,daemon:12,danc:[0,1,7,8],dancer:[2,9],dancer_ml:[],data:[1,7,8,9,10],data_d:13,data_list:13,databas:15,database_config_path:15,database_list:15,dataconfig:13,datafram:[2,9,10],dataset:[2,9],debug:16,decom_output_fil:[],decomp:[],def2svp:4,default_gbt_param:2,default_lr_param:2,default_param:[2,8,9],default_rf_param:2,defaultdataconfig:13,del_clf:9,del_databas:15,del_gen:15,del_ignore_lig:11,del_mut:11,del_wat:13,delai:16,demand:[0,7,8],demo:4,densiti:[0,7,8],design:9,dev:12,devic:10,df:[],dft:12,dht:6,dict:[2,9,12,13,15,16],directori:3,distanc:[],dl:[8,9],dm:2,dms:11,dock:[0,2,4,7,8,15],dock_datalist:13,dock_result_fil:13,docker:13,docking_ligand:13,docking_ligand_st:13,docking_receptor_st:13,docking_scor:[],dockresultfil:13,doe:16,download_dir:16,download_pdb:[13,16],download_pdb_list:16,drug:9,dtt:6,durat:16,dynam:[0,1,7,8],em:4,emiss:12,emit:16,encod:16,end:[],end_fram:[],energi:12,ensembl:[0,2,3,6,7,8,15],entri:13,entropi:[],env:3,eqn:13,eqo:13,evalu:[1,9],exampl:[3,13],extra_admet_data:13,extra_docking_data:13,extract_cub:12,extract_docking_data:13,extract_fram:[],extract_lowest_energy_st:[],fals:[2,9,10,12,13,16],famili:15,fchk:12,fchk_file:12,file:[3,4,16],file_dir:16,file_ext:16,file_nam:[9,16],file_path:[4,13,16],file_prefix:16,file_suffix:16,file_typ:4,filenam:16,fill_na:2,fill_na_valu:2,fill_nan:9,fit:10,flag:[12,13,15,16],format:16,forward:10,frame:[9,10],frcmod:4,frcmod_fil:[],free:[],freq:12,from:[2,4,16],from_csv:9,from_pickl:[2,9],from_splited_data:9,func:16,gap:12,gauss:[0,1,12],gauss_path:12,gaussian:[0,4,12],gb:[12,13],gbsa:13,gbt:[2,9],gbt_default_param:[2,9],gd3bj:4,gen_input_fil:15,gene:15,gene_config_path:15,genelist:15,generate_energi:12,generate_fchk:12,generate_input_fil:15,generate_opt:12,generate_report:13,geo:10,geo_averag:10,geomean:10,geometri:13,get_apo:11,get_best_scp:[],get_clf:9,get_clfs_dict:[2,9],get_config:16,get_confirm:16,get_databas:15,get_first_structur:13,get_gaussian:12,get_gbt_default_param:9,get_gen:15,get_gridfile_path_list:13,get_input:16,get_input_pdbid:13,get_lib_dir:16,get_lig:13,get_lig_molnum:13,get_lig_nam:13,get_ligand_fil:13,get_ligand_list:13,get_logfile_nam:16,get_lr_default_param:9,get_merged_data:[2,9],get_merged_fil:13,get_mo:12,get_mo_info:12,get_mut:11,get_mutation_pdb:11,get_pairs_list:13,get_param:10,get_pdbfile_path_list:13,get_pdbid_list:13,get_predict_structur:13,get_queri:11,get_receptor_fil:13,get_receptor_list:15,get_rf_default_param:9,get_roc:[],get_scatt:[],get_scor:[],get_scp_report:[],get_split:[],get_test_data:[2,9],get_train_data:[2,9],get_weight:9,glide:13,gpu:4,grid:[9,12,13],grid_dir:13,grid_fil:13,grid_file_path:13,grid_gener:13,gridbox_s:13,gridfil:13,guid:0,handl:16,handler:0,hbond:[],heatmap:[],held:16,help:[0,3,4],hidden_dim:10,higher:0,homo:12,homo_energi:12,homo_index:12,how:1,htv:13,hyperparam_tun:9,id:[3,6,13,15,16],ignor:16,ignore_nan:10,index:[12,13],info_index:16,ini:6,initi:10,inp:15,inpcrd:4,input:[4,13],input_dim:10,input_fil:[],input_file_path:5,inputfil:13,instal:[0,3],interfac:16,interv:[],is:16,issu:0,itself:16,job:13,job_nam:12,job_typ:[],jobcontrol:13,jobnam:15,json:2,jupyt:[],k_fold:[2,9],kaim:10,kaiming_norm:10,kaiming_uniform:10,keep_chain:13,kei:[13,16],kendal:[],kwarg:[9,13],label:15,label_col:[2,9],launch:13,leap:[],leap_prepar:4,learn:0,librari:3,library_fil:3,lifetim:0,lig:4,lig_fil:[13,15],lig_info:13,lig_nam:13,lig_resnum:13,ligand:[4,13],ligand_dir:13,ligand_fil:13,ligand_id:13,ligand_lib_onli:13,ligand_nam:13,ligand_onli:13,ligand_save_dir:13,ligand_topfile_path:[],ligandfil:13,ligfil:13,lignam:13,like:9,linear_model:2,linux:0,list:[13,15,16],liter:10,load_mdout:[],load_param:9,load_topfil:[],load_traj:[],lock:16,log:[0,7,8],logisticregress:2,loop:13,loos:[4,12],lower_is_bett:[9,10],lr:[2,9],lr_default_param:[2,9],luf:13,lumo:12,lumo_energi:12,lumo_index:12,machin:[],mae:[3,13],maegz:[3,13],maestro:[4,13],maestrofil:13,main:16,makedirs_from_list:16,mani:1,map:13,mask:[],matrix:[2,3,9],max:[],maxbyt:16,maximum:10,mb:12,md:0,mdanalysi:0,mdout_file_path:[],mean:10,mean_scp:2,mem:12,memori:12,menu_nam:[12,13,15,16],merg:[],merged_fil:13,method:[9,10],metric:[2,7,8],min:[],minim:13,minimum:10,miss:4,missing_loop:13,mkdir:4,ml:[],mlp:10,mm:13,mmgbsa:[0,13],mmpbsa:[],mo:12,mode:[3,13,16],model:[1,9],model_nam:9,models_evaluation_report:[],modifiedfilehandl:16,modul:[3,7],mol2:[],molecul:[4,13],molecule_fil:4,molecule_file_path:[],molecule_prepar:4,multidock:[],multiinputfil:13,multipl:[4,12],multiwfn:[0,4],myconfig:16,mymlp:[],n_job:9,n_repeat:[2,9],n_split:[],name:[0,13],nan:[],ndarrai:[],nef:[0,9],nef_scor:9,new_processor:4,newlin:16,nn:10,nohup:[],nointramol:[],none:[9,10,11,12,13,15,16],normal:10,note:1,notebook:[],num:3,number:13,numpi:[0,10],object:[9,11,12,13,16],obtain:16,occur:16,of:[0,1,16],one:1,onli:[],openbabel:0,opt:12,option:[0,4,9,10,11,12,13,16],options_label:16,optionstr:16,optionxform:16,or:[0,2,4,9],origin:[],original_st:12,output_dim:10,output_fil:13,outputfil:[],overrid:16,overwrit:[13,16],owner:16,p10275:6,packag:[0,1,3,7],panda:[0,9,10],parallel:[3,4],parallel_num:13,param:[9,10,16],param_gird:9,param_grid:9,paramet:12,params1:2,params2:2,params_grid:9,parent:16,parmchk2:4,parse_:13,parse_fil:13,parse_uniport:11,path:[9,11,13,15,16],path_list:16,pb:[],pcm:12,pdb:[0,3,4,6,9,11,13,15,16],pdb_dir:13,pdb_file:13,pdb_file_path:13,pdb_list:11,pdbfile:13,pdbid:[4,13,15,16],pdblist:16,pearson:[],percent:9,perform:9,perl:0,pharmaceut:0,pickl:[2,9],pid:12,pidfil:12,pip:[0,3],pkl:2,platform:1,plot:[],pmemd:[],pos_label:[],pos_lael:[],posit:[],precis:13,predict:10,predict_fil:13,predict_proba:10,prefix:4,prepar:[1,4],prepare_data:[2,9],prepi:[],prepin:4,prepin_fil:[],preprocess:[],prepross:[],prepwizard:13,pretein_file_path:[],print_classifier_info:[2,9],print_cv_result:[2,9],printatomnum:[],prmtop:4,pro:4,processor:4,progress:16,properti:[9,12,13,15,16],protein:4,protein_dir:13,protein_fil:4,protein_prepar:4,ps:4,py:[],pycadd:[2,3,4,5,6],pymdprepar:[],pynalysi:[],pypi:0,pypmemd:[],python3:3,python:[1,3,6,15],pytorch:10,pyyaml:0,queri:0,quert_cfg:11,query_pdb:11,query_uniprot:11,querycli:11,quick:[1,6,13],r18:6,ra:9,rai:4,random:9,random_se:[2,9],random_st:[],randomforestclassifi:2,ratio:[],rcsb:16,rea:13,read:13,read_data:[],read_database_config:15,read_databs:15,read_from_config:13,read_gen:15,read_gene_config:15,read_matrix:[],read_origin_st:12,readm:[],recep_fil:13,recep_list:15,recepfil:13,receptor:13,receptor_topfile_path:[],receptorfil:13,record:16,redock:3,ref:[],refefence_datalist:13,reg_databas:15,reg_gen:15,regist:[7,8],repeat:[],repeat_cv:[2,9],report:[6,13],report_save_dir:13,requir:1,required_dir:15,resid:13,resp2:4,resp:0,restart:12,result:[2,3,13],reult:2,rf:[2,9],rf_default_param:[2,9],rich:[0,16],rmsd:13,rmsf:[],roc:9,roc_auc:9,roc_auc_scor:[2,9],rollov:16,row:10,rtype:[12,16],rudec:[],run:[3,12,13,15],run_energy_calc:[],run_simul:4,rxr:6,sa:13,save:[2,9,11],save_admet_data:13,save_csv:9,save_dir:[9,13],save_docking_data:13,save_ensemble_docking_data:13,save_fmt:13,save_param:9,save_path:11,save_pickl:9,save_redocking_data:13,scatter:[],school:0,schroding:[0,3,4,13],scienc:0,scikit:0,scipi:0,score:9,score_func:[2,9],score_nam:[],scp:9,scp_report:[],screen:15,script:15,seaborn:0,search_param:[2,9],section:6,select_databas:15,select_first:13,select_first_lig:13,self:[3,9],seri:[9,10],set_basis_set:12,set_calc_rmsd:13,set_charg:12,set_comsolvate_fil:4,set_cuda_devic:4,set_dft:12,set_method:[],set_multipl:12,set_param:2,set_precis:13,set_solv:12,set_system:12,setuptool:[],sh:[],show_choic:16,show_cuda_devic:4,show_default:16,show_panel:16,shwo_cuda_devic:4,side_chain:13,simpl:4,simul:4,singl:[],sitemap:13,size:4,sklearn:[2,9],solvent:12,somewher:4,sp:13,spearman:[],spin_multi:12,split:13,split_complex:13,split_data:[],split_ligand:13,split_train_test_data:[2,9],st_path:12,st_reader:13,start:[1,12],start_fram:[],std:10,std_scp:2,stderr:12,stdin:12,stdout:12,step_length:4,step_num:4,stop:12,str:[4,9,10,11,12,13,15,16],structur:13,structureread:13,submodul:[7,8],subpackag:7,suit:[0,3],system_default:12,system_info:[12,16],task_id:16,td:12,tddft:0,templat:[7,8],termin:16,tes:6,test_data:[2,9],test_siz:[2,9],testset_ev:[2,9],testset_eval_result:2,testset_result:9,text:16,the:16,thi:16,time_sleep:16,timeit:16,timeout:13,tip3p:4,titl:16,tleap:4,tmp:12,to:[1,13,16],to_format:13,tool:[7,8],top:4,top_file_path:[],torch:10,total:9,trace_angl:[],trace_dist:[],train:10,train_data:[2,9],traj_file_path:[],tupl:[9,13],txt:3,type:[9,10,16],ui:[3,7,8],ui_danc:[],ui_dock:13,ui_gauss:12,ui_vsw:15,umask:16,undefin:2,unicode_error_polici:16,uniprot:[],uniprot_file_path:11,uniprot_id:11,univers:0,use:1,use_gzip:16,use_train_set_onli:9,user:[0,16],util:[7,8,12,13,15],valu:[9,12,13],version_info:16,virtual:[3,15],vmax:[],vmin:[],vsw:[7,8],vsw_dir:15,water:12,wheel:0,widetyp:11,within:16,work:3,workflow:15,worst_scp:2,write:16,x_i:10,x_test:[],x_train:[],xavier:10,xavier_norm:10,xavier_uniform:10,xgb:2,xgbclassifi:2,xgboost:2,xiamen:0,xlsx:13,xlsxwriter:0,xmu:0,xp:13,y_score:9,y_test:[],y_train:[],y_true:9,y_ture:[],yaml:6,yh:0,yml:6,your_datafram:2,your_file_nam:2,your_matrix_path:2,your_negative_matrix_path:2,your_params_dict:2,your_positive_matrix_path:2,z_score:[],z_score_combin:[],z_score_ligand:[],z_score_receptor:[],zip:13},titles:["pyCADD","pyCADD Documentation","Dance User Guide","Dock Quick Start","Dynamic Quick User Guide","Gauss Quick Start","\u6784\u5efaDock\u8f93\u5165\u6587\u4ef6\u65f6\u7684\u89c4\u8303","pyCADD","pyCADD package","pyCADD.Dance package","pyCADD.Dance.algorithm package","pyCADD.Demand package","pyCADD.Density package","pyCADD.Dock package","pyCADD.Dynamic package","pyCADD.VSW package","pyCADD.utils package"],titleterms:{"function":[0,3],algorithm:10,amber:4,analysi:14,and:[1,2],api:1,attent:0,base:[12,15],calcul:[],cheminformat:16,cli:[4,11,13,14],common:[9,13,14,16],config:[11,13],consensu:10,consol:13,content:[8,9,10,11,12,13,14,15,16],core:[9,11,12,13,14,15],danc:[2,9,10],data:[2,13],default_param:10,demand:11,densiti:12,dl:10,dock:[1,3,6,13],document:1,dynam:[4,14],ensembl:13,evalu:2,file:1,format:1,gauss:5,gaussian:[],guid:[1,2,4],how:0,indic:1,input:1,leap:4,log:16,mani:3,metric:9,model:2,modul:[0,1,8,9,10,11,12,13,14,15,16],note:[0,6],of:3,one:3,packag:[8,9,10,11,12,13,14,15,16],platform:0,prepar:2,pycadd:[0,1,7,8,9,10,11,12,13,14,15,16],python:[0,4],queri:[],quick:[3,4,5],readm:1,refer:1,regist:15,requir:0,start:[3,5],submodul:[9,10,11,12,13,14,15,16],subpackag:[8,9],tabl:1,templat:14,to:[0,3],tool:16,ui:[12,13,15,16],use:0,user:[1,2,4],util:16,version:0,vsw:15,welcom:[]}})