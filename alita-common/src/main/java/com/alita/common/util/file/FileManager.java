package com.alita.common.util.file;

import com.alita.common.util.file.strategys.LocalFileStrategy;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileNotFoundException;
import java.io.InputStream;

/**
 * 文件管理器
 * @author: alita
 */
@Component
public class FileManager {

    private FileStrategy fileManagerStrategy;

    /**
     * 默认使用本地策略存储文件
     */
    public FileManager() {
        this.fileManagerStrategy = new LocalFileStrategy();
    }

    /**
     * 设置文件管理策略
     */
    public void setFileManagerStrategy(FileStrategy fileManagerStrategy) {
        this.fileManagerStrategy = fileManagerStrategy;
    }

    public String upload(MultipartFile file) {
        return this.fileManagerStrategy.upload(file);
    }

    public InputStream download(String fileName) throws FileNotFoundException {
        return this.fileManagerStrategy.download(fileName);
    }

    public void delete(String fileName) {
        this.fileManagerStrategy.delete(fileName);
    }

}
