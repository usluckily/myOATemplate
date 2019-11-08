
import eUpload from '@/components/upload/e-upload';

export default {
    name: 'search-form',
    props: {
        items: {
            type: Array,
            default () {
                return [];
            }
        },
        loading: {
          type: Boolean,
          default: false
        },
        formData: {
            type: Object,
            default () { return {}; }
        },
        model: Object,
        inline: Boolean,
        labelWidth: String,
        showMessage: Boolean,
        disabled: Boolean
    },
    methods: {
        createFormItem(h, item) {
            switch (item.type) {
                case 'autocomplete':
                    return this.createAutoComplete(h, item);
                case 'custom' :
                    return this.createCustom(h, item);
                case 'tag':
                    return this.createTag(h, item);
                case 'number':
                    return this.createNumber(h, item);
                case 'textarea':
                    return this.createInput(h, item);
                case 'select':
                    return this.createSelect(h, item);
                case 'dateRange':
                    return this.createDateRange(h, item);
                case 'text':
                    return this.createText(h, item);
                case 'action':
                    return this.createAction(h, item);
                case 'checkboxs':
                    return this.createCheckboxs(h, item);
                case 'checkbox':
                    return this.createCheckbox(h, item);
                case 'radio':
                    return this.createRadio(h, item);
                case 'img':
                    return this.createImage(h, item);
                case 'video':
                    return this.createVideo(h, item);
                case 'audio':
                    return this.createAudio(h, item);
                case 'input':
                    return this.createInput(h, item);
                case 'date':
                    return this.createDate(h, item);
                case 'time':
                    return this.createTime(h, item);
                case 'timePick':
                    return this.createTimePick(h, item);
                case 'tabs':
                    return this.createTabs(h,item);//创建tabs
                case 'color-picker':
                  return this.createColorPicker(h,item);//颜色选择器
                case 'timeRange':
                  return this.createTimeRange(h,item)//timeRange
                case 'editor':
                  return this.createEditor(h ,item)
                case 'e-upload':
                  return this.createEUpload(h, item);//创建e-upload  

            }
        },
        createAutoComplete(h, item) {
            function querySearch(queryString, cb) {
                var restaurants = item.options;
                var results = queryString ? restaurants.filter(createFilter(queryString)) : restaurants;
                cb(results);
            }
            function  createFilter(queryString) {
                return (restaurant) => {
                  return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            }
            return <el-autocomplete
                class="inline-input"
                on-input={(val) => (this.model[item.prop] = val)} value={this.model[item.prop]}
                fetch-suggestions={querySearch}
                // placeholder="请输入内容"
                // @select="handleSelect"
            ></el-autocomplete>
        },
        createCustom(h, item) {
            return item.renderContent ? item.renderContent.call(this) : null;
        },
        createEUpload(h,item){
            return <eUpload value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)} fileList={item.fileList} limit={item.limit} accept={item.accept} isReturnObj={item.isReturnObj}></eUpload>
        },
        createTag(h, item) {
            let defaultProps = item.defaultProps || {
                id: 'value',
                label: 'text'
            };
            return [
                item.options.map(option => {
                    return [
                        <el-tag type="success" size="small">{option[defaultProps.label]}</el-tag>
                    ]
                }),
                item.addition ? item.addition() : null
            ]
        },
        createNumber(h, item) {
            return [
                <el-input-number value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)} min={item.min} max={item.max} precision={item.precision} step={item.step} label={item.label}></el-input-number>,
                item.addition ? item.addition(h,item) : null
            ]
        },
        createSelect(h, item) {
            if(item.reference) {
                switch (item.reference) {
                   
                }
            }else{
                let defaultProps = item.defaultProps || {
                    id: 'value',
                    label: 'text'
                };
                return (
                    [<el-select disabled={item.disabled}  on-change={(val) => typeof item.change === 'function' && item.change.call(this.$parent, val)}
                        size={item.size} multiple={item.multiple || false} filterable={item.filterable || false} value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)} placeholder={item.placeholder}>
                        { item.hasAll ? <el-option key={''} label={'请选择'} value={''}></el-option> : null }
                        {
                            item.options.map(option => {
                                return (
                                    <el-option
                                        key={option[defaultProps.id]}
                                        label={option[defaultProps.label]}
                                        value={option[defaultProps.id]}>
                                    </el-option>
                                )
                            })
                        }
                    </el-select>,
                    item.addition ? item.addition() : null]
                )
            }
        },
        createDate(h, item) {
            return (
                <el-date-picker value-format={item.format} format={item.format} on-input={(val) => (this.model[item.prop] = val)} value={this.model[item.prop]} type={item.datePickType || 'datetime'}
                    placeholder="选择日期时间">
                </el-date-picker>
            )
        },
        createTimePick(h, item) {
            return (
                <el-time-picker on-input={(val) => (this.model[item.prop] = val)} value={this.model[item.prop]}
                    is-range
                    arrow-control
                    range-separator="——"
                    start-placeholder="开始时间"
                    end-placeholder="结束时间"
                    placeholder="选择时间范围"
                    value-format={item.valueFormat || 'HH:mm:ss'}
                    picker-options={
                        {
                            format: item.format || 'HH:mm:ss'
                        }
                    }
                    on-change={(val) => typeof item.change === 'function' && item.change.call(this.$parent, val)}
                    >
                </el-time-picker>
            )
        },
        createTime(h, item) {
            return (
                <el-time-select on-input={(val) => (this.model[item.prop] = val)} value={this.model[item.prop]}
                    picker-options={{
                        start: item.start || '00:00',
                        step: item.step || '00:05',
                        end: item.end || '24:00',
                        minTime: item.minTime
                    }} placeholder={'选择时间'}>
                </el-time-select>
            )
        },
        createTimeRange(h ,item) {
                return (
                <el-time-picker on-input={(val) => (this.model[item.prop] = val)} value={this.model[item.prop]}
                                is-range
                                value-format={item.valueFormat}
                                range-separator="至"
                                start-placeholder="开始时间"
                                end-placeholder="结束时间"
                                placeholder="选择时间范围"
                >
                </el-time-picker>
                )
        },
        createDateRange(h, item) {
            return (
                <el-date-picker type='datetimerange' value-format={item.format || 'yyyy-MM-dd'} on-input={(val) => (this.model[item.prop] = val)} value={this.model[item.prop]}
                    on-change={(val) => typeof item.change === 'function' && item.change.call(this.$parent, val)}
                    startPlaceholder={'开始时间'}
                    endPlaceholder={'结束时间'}
                    rangeSeparator='至' editable={false} disabled={item.disabled}
                    picker-options={item.pickerOptions}
                    format='yyyy-MM-dd'
                    />
            )
        },
        createText(h, item) {
            if(item.formatter){
              return(
                <span>{item.formatter(this.formData[item.prop] || this.model[item.prop])}</span>
              )
            }

            if(item.innerHtml){
              return(
                <span domPropsInnerHTML={this.model[item.prop]}></span>//vue jsx对应的插入html属性: domPropsInnerHTML
              )
            }

            return (
                <span>{this.formData[item.prop] || this.model[item.prop]}</span>
            )
        },
        createAction(h, items) {
            return props => {
                return items.actionList && items.actionList.map((item, key) =>
                    <el-button key={key}
                        v-has={item.code}
                        size={item.size || ''}
                        type={item.btnType || 'primary'}
                        on-click={() => typeof item.handleClick === 'function' && item.handleClick.call(this.$parent, props.row)}>
                        {item.text}
                    </el-button>
                );
            };
        },
        createCheckboxs (h, item) {
            let defaultProps = item.defaultProps || {
                id: 'value',
                label: 'text'
            };
            
            return (
                <el-checkbox-group  value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)}
                on-change={val => item.change && item.change.call(this.parents, val)}
                >
                  {
                      item.options.map((option) => {
                          return (
                              <el-checkbox border={item.border} style={item.style}  label={option[defaultProps.id]}>{option[defaultProps.label]}</el-checkbox>
                          );
                      })
                  }
                </el-checkbox-group>
            );
        },
        createCheckbox (h, item) {
            return (
                <el-checkbox value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)}>{item.text}</el-checkbox>
            );
        },
        createRadio(h, item) {
            let defaultProps = item.defaultProps || {
                id: 'value',
                label: 'text'
            };
            return (
                <el-radio-group on-change={(val) => typeof item.change === 'function' && item.change.call(this.$parent, val)} value={this.model[item.prop]} on-input={(val) => (this.model[item.prop] = val)}>
                    {
                        item.options.map(option => {
                            return (
                                [
                                    <el-radio label={option[defaultProps.id]}>{option[defaultProps.label]}</el-radio>,
                                    option.note ? <div class='radio-note'>{option.note}</div> : null
                                ]
                            )
                        })
                    }
                </el-radio-group>
            );
        },
        createImage(h, item) {
            return (
                this.formData[item.prop] || this.model[item.prop] ? <img class="my-img" src={this.formData[item.prop] || this.model[item.prop]} /> : null
            )
        },
        createVideo(h, item) {
            return (
                this.formData[item.prop] || this.model[item.prop] ? <video src={this.formData[item.prop] || this.model[item.prop]} controls="controls"></video> : null
            )
        },
        createAudio(h, item) {
            return (
                this.formData[item.prop] || this.model[item.prop] ? <audio src={this.formData[item.prop] || this.model[item.prop]} controls="controls"></audio> : null
            )
        },
        createInput (h, item) {
            return (
                [<el-input
                    value={this.model[item.prop]}
                    maxlength={item.maxlength && item.maxlength}
                    type={item.type}
                    rows={item.rows}
                    class={item.class}
                    readonly={item.readonly}
                    disabled={item.disabled}
                    placeholder={item.placeholder}
                    clearable={item.clearable}
                    on-input={(val) => (this.model[item.prop] = val.trim())}/>,
                item.addition ? item.addition() : null]
            );
        },
        createTabs (h,item) {
            let options

            if(item.renderContent) return props => item.renderContent(h, props);

            typeof item.options === 'function' ? options = item.options() : options = item.options

            if(item.tabType == 'radio'){
              console.log(item.change,'change')
              return (
                <el-radio-group size={'mini'} value={this.model[item.prop]} on-change={(val) =>  typeof item.change === 'function' && item.change.call(this.$parent, val)} on-input={(val) => (this.model[item.prop] = val)} >
                  {
                    options.map(option => {
                      return (
                        <el-radio-button label={option.value}  name={option.text}>{option.text}</el-radio-button>
                      )
                    })
                  }
                </el-radio-group>
              )
            }

             return (
               <div style="width:100%;display:block;">
                 <el-tabs value={this.model[item.prop]} on-tab-click={(val) =>  typeof item.change === 'function' && item.change.call(this.$parent, val)} on-input={(val) => (this.model[item.prop] = val)} >
                   {
                     options.map(option => {
                       return (
                         <el-tab-pane label={option.text}  name={option.value}></el-tab-pane>
                       )
                     })
                   }
                 </el-tabs>
               </div>
             )
        },
        createColorPicker (h,item) {
          return <el-color-picker value={this.model[item.prop]} on-active-change={(val) => (this.model[item.prop] = val)}></el-color-picker>
        },

    },
    render (h) {
        return h('el-form', {
            staticClass: this.inline ? 'search-form inline' : 'search-form',
            ref: 'form',
            directives: [
              {
                name: 'loading',
                value: this.loading
              }
            ],
            attrs: {
              'element-loading-text': '拼命加载中...'
            },
            on: {
              ...this.$listeners,
              'selection-change':this.$listeners['selection-change'] || ''
            },
            props: {
                model: this.model,
                inline: this.inline,
                labelWidth: this.labelWidth,
                showMessage: this.showMessage,
                disabled: this.disabled
            }
        }, this.items.map(item => {
            if(item.hide) {
                console.log(this)
                this.$refs['form'].clearValidate()
                return
            } //新增隐藏属性

            return h('el-form-item', {
                props: {
                    prop: item.prop,
                    label: item.label,
                    required:item.required ,
                    rules: item.rules === 'default' ? [
                        {
                            // trigger:['blur','change'],
                            required: true, message: (() => {
                                let res = '请'
                                switch(item.type){
                                    case 'input':
                                    case 'textarea':
                                    case 'date':
                                    case 'dateRange':
                                    case 'radio':
                                    case 'checkbox':    
                                        res += '填写'
                                        break
                                    case 'select':
                                        res += '选择'
                                        break
                                    case 'e-upload':
                                        res += '上传'
                                        break
                                    default:
                                        res += '输入'
                                }
    
                                res += item.label
    
                                res = res.replace(/:/,'')
    
                                return res
                            })()
                        }
                    ] : item.rules ,
                    error: item.error,
                    showMessage: item.showMessage || true,
                    inlineMessage: item.inlineMessage,
                    size: item.size
                }
            }, [this.createFormItem(h, item)]);
        }))
    },
    components: {
        eUpload
    },
    updated() {
    }
}
